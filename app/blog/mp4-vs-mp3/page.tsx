import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "MP4 vs MP3 • SSA Blog",
  description: "Compare formats, use cases, and quality.",
}

export default function Mp4VsMp3Page() {
  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle className="text-2xl">MP4 vs MP3: Which Format Should You Choose?</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground">
            <h3>What They Are</h3>
            <ul>
              <li>MP4: A container for video, audio, and subtitles—ideal for full videos.</li>
              <li>MP3: An audio-only format for music, podcasts, or audio extracts.</li>
            </ul>

            <h3>Use Cases</h3>
            <ul>
              <li>Choose MP4 when you need visuals (tutorials, music videos, reviews).</li>
              <li>Choose MP3 when you only need the soundtrack for offline listening.</li>
            </ul>

            <h3>Quality Differences</h3>
            <p>
              MP4 files can include high-resolution video and high-bitrate audio. MP3 focuses on audio bitrates (e.g.,
              128–320 kbps). Higher bitrates generally mean better fidelity and larger file sizes.
            </p>

            <h3>Recommendation</h3>
            <p>
              If you’ll watch: go MP4. If it’s background listening: MP3 (or M4A/WebM audio) is more efficient and
              portable.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
