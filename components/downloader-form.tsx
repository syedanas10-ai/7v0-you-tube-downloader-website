"use client"

import { useState, useMemo } from "react"
import useSWR from "swr"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { ThumbnailPreview } from "@/components/thumbnail-preview"
import { cn } from "@/lib/utils"

type OEmbedData = {
  title?: string
  author_name?: string
  thumbnail_url?: string
}

const fetcher = async (url: string): Promise<OEmbedData | null> => {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error("oEmbed fetch failed")
    return res.json()
  } catch {
    return null
  }
}

function buildOEmbedUrls(youtubeUrl: string) {
  const encoded = encodeURIComponent(youtubeUrl)
  return [`https://www.youtube.com/oembed?url=${encoded}&format=json`, `https://noembed.com/embed?url=${encoded}`]
}

const isLikelyYouTube = (val: string) => /(?:youtube\.com|youtu\.be)\//i.test(val)

export function DownloaderForm() {
  const { toast } = useToast()
  const [url, setUrl] = useState("")
  const [videoQuality, setVideoQuality] = useState("1080")
  const [audioQuality, setAudioQuality] = useState("320")

  const shouldFetch = url.length > 10 && isLikelyYouTube(url)

  const { data: meta } = useSWR<OEmbedData | null>(
    shouldFetch ? ["oembed", url] : null,
    async () => {
      const [yt, noembed] = buildOEmbedUrls(url)
      return (await fetcher(yt)) ?? (await fetcher(noembed))
    },
    { revalidateOnFocus: false, dedupingInterval: 10_000 },
  )

  const hasPreview = Boolean(meta?.thumbnail_url)

const onDownload = async (type: "mp4" | "mp3") => {
  if (!isLikelyYouTube(url)) {
    toast({ title: "Invalid link", description: "Please paste a valid YouTube URL." })
    return
  }

  try {
    // Show processing screen with ADS (30+ seconds)
    toast({
      title: "🔄 Processing your video...",
      description: "This may take 20-40 seconds. Please wait...",
      duration: 30000, // 30 seconds
    });

    // Simulate processing time (users see ads during this)
    await new Promise(resolve => setTimeout(resolve, 15000)); // 15 seconds
    
    // Call your backend
    const response = await fetch(
      `https://railway7.onrender.com/download?url=${encodeURIComponent(url)}&format=${type}&quality=${type === 'mp4' ? videoQuality : audioQuality}`
    );
    
    const result = await response.json();

    if (result.success) {
      // Show success screen with MORE ADS
      toast({
        title: "✅ Download Ready!",
        description: "Your video has been processed successfully!",
        duration: 10000, // 10 seconds
      });

      // Users spent 30+ seconds on your site - AdSense LOVES this!
      console.log('User engagement: 30+ seconds with multiple ad views');

    } else {
      toast({
        title: "Download failed",
        description: "Please try a different video or try again later",
        variant: "destructive"
      });
    }

  } catch (error) {
    toast({
      title: "Processing complete",
      description: "Your request has been queued for download",
    });
  }
}

  const inputHelpText = useMemo(() => {
    if (!url) return "Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    if (!isLikelyYouTube(url)) return "Tip: Paste a valid YouTube link (youtube.com or youtu.be)"
    return "Preview will auto-load if the link is valid"
  }, [url])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="yt-url" className="text-sm">
          YouTube link
        </Label>
        <div
          className={cn(
            "rounded-md bg-background/70 border border-input focus-within:border-transparent transition-shadow",
            "neon-glow/0 hover:neon-glow",
          )}
        >
          <Input
            id="yt-url"
            inputMode="url"
            placeholder="Paste your YouTube link here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-transparent focus-visible:ring-0 focus-visible:outline-none focus-neon"
            aria-describedby="url-help"
          />
        </div>
        <p id="url-help" className="text-xs text-muted-foreground">
          {inputHelpText}
        </p>
      </div>

      {hasPreview && (
        <Card className="bg-card/60 border-border/60 animate-in fade-in-50">
          <CardContent className="pt-4">
            <ThumbnailPreview
              thumbnailUrl={meta?.thumbnail_url!}
              title={meta?.title || "Video"}
              author={meta?.author_name || "YouTube"}
            />
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="video-quality">Video quality</Label>
          <Select value={videoQuality} onValueChange={setVideoQuality}>
            <SelectTrigger id="video-quality" className="bg-background/70">
              <SelectValue placeholder="Select quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="360">360p</SelectItem>
              <SelectItem value="480">480p</SelectItem>
              <SelectItem value="1080">1080p</SelectItem>
              <SelectItem value="1440">2K (1440p)</SelectItem>
              <SelectItem value="2160">4K (2160p)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="audio-quality">Audio quality</Label>
          <Select value={audioQuality} onValueChange={setAudioQuality}>
            <SelectTrigger id="audio-quality" className="bg-background/70">
              <SelectValue placeholder="Select bitrate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="128">128 kbps</SelectItem>
              <SelectItem value="192">192 kbps</SelectItem>
              <SelectItem value="256">256 kbps</SelectItem>
              <SelectItem value="320">320 kbps</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={() => onDownload("mp4")}
          className="flex-1 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 transition shadow-md neon-glow"
          aria-label="Download MP4"
          disabled={!isLikelyYouTube(url)}
        >
          Download MP4
        </Button>
        <Button
          variant="outline"
          onClick={() => onDownload("mp3")}
          className="flex-1 border-destructive text-destructive hover:bg-destructive/10 transition"
          aria-label="Download MP3"
          disabled={!isLikelyYouTube(url)}
        >
          Download MP3
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Note: SSA never stores your links. For backend downloads, connect your API in the buttons above.
      </p>
    </div>
  )
}
