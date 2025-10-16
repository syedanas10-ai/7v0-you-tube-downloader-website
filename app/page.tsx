import type React from "react"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChannelBadge } from "@/components/channel-badge"
import { DownloaderForm } from "@/components/downloader-form"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center px-4">
      <div
        className="relative w-full max-w-3xl space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-500"
        style={
          {
            // Electric neon blue brand (avoids purple tone)
            ["--color-sidebar-primary" as any]: "oklch(0.72 0.22 240)",
          } as React.CSSProperties
        }
      >
        {/* background grid */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklch, var(--color-border) 25%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--color-border) 25%, transparent) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "center center",
          }}
        />
        {/* hero glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -z-10 top-[-10%] left-1/2 h-[520px] w-[520px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklch, var(--color-sidebar-primary) 60%, transparent), transparent 70%)",
            filter: "blur(24px)",
            opacity: 0.6,
          }}
        />

        <header className="text-center space-y-3">
          <div className="educational-content space-y-6 bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-6">
  <h2 className="text-2xl font-bold text-center">Complete YouTube Download Guide</h2>
  
  {/* How It Works */}
  <div className="bg-background/50 rounded-lg p-4 border">
    <h3 className="text-xl font-semibold mb-3">How to Download YouTube Videos</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      <div className="text-center p-3 bg-muted rounded">
        <div className="font-bold text-lg">1</div>
        <div>Copy YouTube URL</div>
      </div>
      <div className="text-center p-3 bg-muted rounded">
        <div className="font-bold text-lg">2</div>
        <div>Paste link below</div>
      </div>
      <div className="text-center p-3 bg-muted rounded">
        <div className="font-bold text-lg">3</div>
        <div>Choose format</div>
      </div>
      <div className="text-center p-3 bg-muted rounded">
        <div className="font-bold text-lg">4</div>
        <div>Download video</div>
      </div>
    </div>
  </div>

  {/* Format Guide */}
  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-background/50 rounded-lg p-4 border">
      <h3 className="text-lg font-semibold mb-2">Video Formats</h3>
      <ul className="text-sm space-y-1">
        <li><strong>MP4:</strong> Universal format, works on all devices</li>
        <li><strong>WEBM:</strong> High quality, smaller file size</li>
        <li><strong>3GP:</strong> For older mobile devices</li>
      </ul>
    </div>
    <div className="bg-background/50 rounded-lg p-4 border">
      <h3 className="text-lg font-semibold mb-2">Audio Formats</h3>
      <ul className="text-sm space-y-1">
        <li><strong>MP3:</strong> Most compatible audio format</li>
        <li><strong>M4A:</strong> Apple devices, better quality</li>
        <li><strong>OGG:</strong> Open source format</li>
      </ul>
    </div>
  </div>

  {/* Quality Guide */}
  <div className="bg-background/50 rounded-lg p-4 border">
    <h3 className="text-lg font-semibold mb-3">Video Quality Guide</h3>
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-xs">
      <div className="text-center p-2 bg-muted rounded">144p - Basic</div>
      <div className="text-center p-2 bg-muted rounded">360p - Standard</div>
      <div className="text-center p-2 bg-muted rounded">720p - HD Ready</div>
      <div className="text-center p-2 bg-muted rounded">1080p - Full HD</div>
      <div className="text-center p-2 bg-muted rounded">4K - Ultra HD</div>
    </div>
  </div>

  {/* Legal Notice */}
  <div className="bg-muted/50 rounded-lg p-4 border">
    <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
    <p className="text-sm">Download videos only for personal use, education, or with proper permissions. Respect copyright laws and creators' rights.</p>
  </div>
</div>

        <Card className="bg-card/60 backdrop-blur-sm border-border/60 neon-glow">
          <CardHeader>
            <CardTitle>Start Downloading</CardTitle>
            <CardDescription>
              Paste a YouTube link, preview the thumbnail, then choose format and quality.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Suspense fallback={<div className="text-muted-foreground">Loading form…</div>}>
              <DownloaderForm />
            </Suspense>
          </CardContent>
        </Card>

        <section aria-labelledby="howto" className="grid gap-4 md:grid-cols-3">
          <Card className="bg-card/60 border-border/60">
            <CardHeader>
              <CardTitle id="howto" className="text-lg">
                How it works
              </CardTitle>
              <CardDescription>Simple, fast, and secure</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>1. Paste a YouTube link.</p>
              <p>2. Preview the thumbnail.</p>
              <p>3. Pick MP4 or MP3, select quality.</p>
              <p>4. Tap Download. That’s it.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 border-border/60">
            <CardHeader>
              <CardTitle className="text-lg">Quality options</CardTitle>
              <CardDescription>Video and audio preferences</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Video: 360p, 480p, 1080p, 2K, 4K</p>
              <p>Audio: 128, 192, 256, 320 kbps</p>
              <p>Choose speed or crystal clarity—your call.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 border-border/60">
            <CardHeader>
              <CardTitle className="text-lg">Trust & safety</CardTitle>
              <CardDescription>Why choose SSA</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Clean experience—no shady popups.</p>
              <p>No login. Your link stays on your device.</p>
              <p>Trusted SSA brand—fast, professional, minimal.</p>
            </CardContent>
          </Card>
        </section>

        <footer className="py-6 text-center text-sm text-muted-foreground">
          Made by SSA
          <Link href="/blog" className="ml-2 text-primary underline">
            Blog
          </Link>
        </footer>
      </div>
    </main>
  )
}
