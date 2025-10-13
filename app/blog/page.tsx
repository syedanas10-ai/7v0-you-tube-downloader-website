import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Blog • SSA YT-MP4/MP3 Downloader",
  description: "Educational articles on video downloading, formats, quality, and mobile optimization.",
}

export default function BlogIndexPage() {
  const posts = [
    {
      slug: "legal-guide",
      title: "YouTube Video Downloading: Complete Legal Guide",
      description:
        "Understand fair use, download responsibly, and learn the basics of copyright so you stay safe and compliant.",
    },
    {
      slug: "mp4-vs-mp3",
      title: "MP4 vs MP3: Which Format Should You Choose?",
      description:
        "Compare video vs audio formats, common use cases, and quality tradeoffs so you pick the right format every time.",
    },
    {
      slug: "video-quality-explained",
      title: "Video Quality: 480p, 1080p, 4K Explained",
      description:
        "What resolution means, when to use each quality, and how file size and bandwidth factor into your decision.",
    },
    {
      slug: "convert-for-mobile",
      title: "How to Convert Videos for Mobile Devices",
      description: "Best formats for phones, compression tips, and optimization techniques for smooth mobile playback.",
    },
  ]

  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div
        className="relative mx-auto w-full max-w-5xl space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-500"
        style={
          {
            ["--color-sidebar-primary" as any]: "oklch(0.72 0.22 240)",
          } as React.CSSProperties
        }
      >
        {/* background grid */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklch, var(--color-border) 25%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--color-border) 25%, transparent) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "center center",
          }}
        />
        {/* header */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary neon-text text-balance">
            SSA Blog
          </h1>
          <p className="text-muted-foreground">
            Learn about downloading responsibly, choosing formats, picking the right quality, and optimizing for mobile.
          </p>
        </header>

        <section aria-labelledby="blog-list" className="grid gap-4 md:grid-cols-2">
          <h2 id="blog-list" className="sr-only">
            Articles
          </h2>
          {posts.map((p) => (
            <Card
              key={p.slug}
              className="bg-card/60 border-border/60 hover:border-sidebar-primary/60 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm text-primary hover:underline underline-offset-4"
                  aria-label={`Read article: ${p.title}`}
                >
                  Read article →
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  )
}
