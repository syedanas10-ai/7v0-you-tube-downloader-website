import type React from "react"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChannelBadge } from "@/components/channel-badge"
import { DownloaderForm } from "@/components/downloader-form"
import Link from "next/link"

export const metadata = {
  title: "Video Format Tools • SSA Video Creator Academy",
  description: "Free video format converter and quality analyzer for creators.",
}

export default function VideoUtilitiesPage() {
  return (
    <main className="min-h-[100svh] flex items-center justify-center px-4">
      <div
        className="relative w-full max-w-3xl space-y-8 animate-in fade-in-50 slide-in-from-bottom-2 duration-500"
        style={
          {
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
          <div className="inline-flex items-center justify-center mx-auto px-3 py-1 rounded-full border border-sidebar-primary/50 bg-background/50 text-xs text-muted-foreground tracking-wide">
            Free & Fast • No Login • Educational Focus
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary neon-text text-balance">
            Video Format Tools
          </h1>
          <p className="text-muted-foreground text-pretty">
            Convert video formats, analyze quality, and optimize your content for any platform. Educational utility
            tools for creators.
          </p>
          <div className="flex items-center justify-center">
            <ChannelBadge />
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/learn"
              className="mt-2 inline-flex items-center rounded-md border border-sidebar-primary/50 bg-background/50 px-4 py-2 text-sm text-primary hover:bg-sidebar-primary/10 transition-colors"
              aria-label="Visit the Learning Hub"
            >
              Learn Video Optimization
            </Link>
          </div>
        </header>

        <Card className="bg-card/60 backdrop-blur-sm border-border/60 neon-glow">
          <CardHeader>
            <CardTitle>Format Converter & Quality Analyzer</CardTitle>
            <CardDescription>
              Convert video formats, select quality, and download optimized files for your platform.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Suspense fallback={<div className="text-muted-foreground">Loading tool…</div>}>
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
              <CardDescription>Simple format conversion</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>1. Paste a video link.</p>
              <p>2. Preview the content.</p>
              <p>3. Choose format and quality.</p>
              <p>4. Download optimized file.</p>
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
              <p>Choose based on platform needs.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/60 border-border/60">
            <CardHeader>
              <CardTitle className="text-lg">Educational use</CardTitle>
              <CardDescription>Responsible content creation</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Learn fair use principles.</p>
              <p>Respect copyright and creators.</p>
              <p>Create ethically and legally.</p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-card/40 border border-border/60 rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold">Educational Context</h2>
          <p className="text-sm text-muted-foreground">
            These tools are designed for educational purposes and responsible content creation. Learn about video
            formats, quality optimization, and best practices in our{" "}
            <Link href="/learn" className="text-primary hover:underline">
              Learning Hub
            </Link>
            .
          </p>
          <p className="text-sm text-muted-foreground">
            Always respect copyright and fair use principles. For more information, read our{" "}
            <Link href="/blog/legal-guide" className="text-primary hover:underline">
              Fair Use & Copyright Guide
            </Link>
            .
          </p>
        </section>

        <footer className="py-6 text-center text-sm text-muted-foreground">
          Made by SSA
          <Link href="/learn" className="ml-2 text-primary underline">
            Learning Hub
          </Link>
        </footer>
      </div>
    </main>
  )
}
