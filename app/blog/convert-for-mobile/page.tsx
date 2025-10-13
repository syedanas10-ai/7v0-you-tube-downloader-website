import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Convert for Mobile • SSA Blog",
  description: "Best formats, compression tips, and mobile optimization.",
}

export default function ConvertForMobilePage() {
  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle className="text-2xl">How to Convert Videos for Mobile Devices</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground">
            <h3>Best Formats</h3>
            <p>
              For broad compatibility, use MP4 (H.264/AAC). For newer devices and smaller sizes at similar quality, HEVC
              (H.265) or AV1 are increasingly supported.
            </p>

            <h3>Compression Tips</h3>
            <ul>
              <li>Use a resolution that matches your device (e.g., 1080p or 720p for phones).</li>
              <li>Lower bitrate to reduce size; target 2–5 Mbps for 1080p depending on content.</li>
              <li>Trim unnecessary parts before converting to save time and space.</li>
            </ul>

            <h3>Mobile Optimization</h3>
            <ul>
              <li>Prefer variable bitrate (VBR) for better quality-per-size.</li>
              <li>Use a fast decode profile for smoother playback on older devices.</li>
              <li>Test on your device to ensure audio/video sync and battery-friendly playback.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
