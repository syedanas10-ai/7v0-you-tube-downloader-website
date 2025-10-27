import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Blog • SSA Video Creator Academy",
  description: "Educational articles on video editing, YouTube growth, content creation, and best practices.",
}

export default function BlogIndexPage() {
  const posts = [
    {
      slug: "editing-like-pro",
      title: "How to Edit Videos Like a Pro",
      description:
        "Master professional video editing techniques, software recommendations, and workflow optimization for stunning results.",
    },
    {
      slug: "youtube-seo-guide",
      title: "YouTube SEO Complete Guide",
      description:
        "Learn keyword research, title optimization, descriptions, tags, and strategies to rank higher and get more views.",
    },
    {
      slug: "format-best-practices",
      title: "Video Format Best Practices",
      description:
        "Understand MP4, WebM, codecs, and platform-specific recommendations for optimal quality and compatibility.",
    },
    {
      slug: "thumbnail-design-masterclass",
      title: "Thumbnail Design Masterclass",
      description:
        "Create eye-catching thumbnails with design principles, color psychology, and A/B testing strategies.",
    },
    {
      slug: "legal-guide",
      title: "Fair Use & Copyright Guide",
      description: "Understand copyright, fair use principles, and how to create content responsibly and ethically.",
    },
    {
      slug: "mp4-vs-mp3",
      title: "Video Formats Explained",
      description: "Compare MP4 vs MP3, understand use cases, quality differences, and choose the right format.",
    },
    {
      slug: "video-quality-explained",
      title: "Resolution & Quality Guide",
      description: "Learn about 480p, 1080p, 4K, file sizes, and when to use each quality level.",
    },
    {
      slug: "convert-for-mobile",
      title: "Mobile Video Optimization",
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
            Video Creator Academy Blog
          </h1>
          <p className="text-muted-foreground">
            Learn video editing, YouTube growth, content creation, and professional best practices.
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
