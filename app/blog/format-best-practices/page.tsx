import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Video Format Best Practices • SSA Blog",
  description: "Learn the best video formats for different platforms and use cases.",
}

export default function FormatBestPracticesPage() {
  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle className="text-2xl">Video Format Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground space-y-4">
            <h3>Understanding Video Formats</h3>
            <p>
              Video formats determine how your content is encoded, compressed, and played. Choosing the right format
              ensures compatibility, quality, and file size efficiency.
            </p>

            <h3>Popular Video Formats</h3>
            <ul>
              <li>
                <strong>MP4 (H.264):</strong> Universal standard, excellent compatibility, good compression. Best for
                most uses.
              </li>
              <li>
                <strong>WebM:</strong> Open-source, excellent for web, smaller file sizes. Limited device support.
              </li>
              <li>
                <strong>MOV:</strong> Apple's format, high quality, larger files. Best for Mac editing.
              </li>
              <li>
                <strong>AVI:</strong> Older format, large files, declining use. Avoid for new projects.
              </li>
              <li>
                <strong>MKV:</strong> Container format, supports multiple streams, excellent for archiving.
              </li>
            </ul>

            <h3>Platform-Specific Recommendations</h3>
            <ul>
              <li>
                <strong>YouTube:</strong> MP4 (H.264) with AAC audio, 1080p or 4K recommended.
              </li>
              <li>
                <strong>Facebook:</strong> MP4 with H.264 video, square or vertical aspect ratios.
              </li>
              <li>
                <strong>Instagram:</strong> MP4, vertical (9:16) for Stories, square (1:1) for Feed.
              </li>
              <li>
                <strong>TikTok:</strong> MP4 or MOV, vertical (9:16), under 5 minutes.
              </li>
              <li>
                <strong>Twitter:</strong> MP4, up to 512MB, 15 minutes max.
              </li>
            </ul>

            <h3>Codec Selection</h3>
            <ul>
              <li>
                <strong>H.264:</strong> Industry standard, excellent compatibility, good compression.
              </li>
              <li>
                <strong>H.265 (HEVC):</strong> Better compression, smaller files, limited device support.
              </li>
              <li>
                <strong>VP9:</strong> Google's codec, excellent quality, slower encoding.
              </li>
              <li>
                <strong>AV1:</strong> Next-generation, best compression, very slow encoding.
              </li>
            </ul>

            <h3>Audio Format Considerations</h3>
            <ul>
              <li>
                <strong>AAC:</strong> Standard for video, good quality at lower bitrates.
              </li>
              <li>
                <strong>MP3:</strong> Universal, good for audio-only content.
              </li>
              <li>
                <strong>FLAC:</strong> Lossless, larger files, best for archiving.
              </li>
              <li>
                <strong>Opus:</strong> Modern codec, excellent quality at low bitrates.
              </li>
            </ul>

            <h3>Export Settings for Quality</h3>
            <ul>
              <li>Use constant bitrate (CBR) for streaming, variable bitrate (VBR) for files.</li>
              <li>For 1080p: 5-8 Mbps video bitrate, 128-192 kbps audio.</li>
              <li>For 4K: 15-25 Mbps video bitrate, 192-256 kbps audio.</li>
              <li>Always export at your project's native resolution.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              MP4 with H.264 codec is the safe choice for most creators. Match your export settings to your platform and
              audience device capabilities for the best results.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
