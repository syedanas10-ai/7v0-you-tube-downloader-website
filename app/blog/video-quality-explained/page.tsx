import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Video Quality Explained • SSA Blog",
  description: "480p, 1080p, 4K and more—what resolution really means.",
}

export default function VideoQualityExplainedPage() {
  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle className="text-2xl">Video Quality: 480p, 1080p, 4K Explained</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground">
            <h3>Resolution Basics</h3>
            <p>
              Resolution measures pixel dimensions. 480p is SD, 1080p is Full HD, and 4K is Ultra HD. Higher resolution
              produces sharper images at the cost of larger files and more bandwidth.
            </p>

            <h3>When to Use Each</h3>
            <ul>
              <li>480p: Fast downloads and data saving; fine for small screens.</li>
              <li>1080p: Balanced quality; ideal for laptops and most TVs.</li>
              <li>4K: Maximum clarity; best for large displays and archiving.</li>
            </ul>

            <h3>File Size & Bandwidth</h3>
            <p>
              Higher resolution and bitrate increase file size. If speed or data caps matter, pick a lower resolution or
              reduce bitrate. For top quality, choose 1080p or 4K when available and your device supports it.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
