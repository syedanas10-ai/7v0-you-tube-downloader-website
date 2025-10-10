import type React from "react"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChannelBadge } from "@/components/channel-badge"
import { DownloaderForm } from "@/components/downloader-form"

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
          <div className="inline-flex items-center justify-center mx-auto px-3 py-1 rounded-full border border-sidebar-primary/50 bg-background/50 text-xs text-muted-foreground tracking-wide">
            Free & Fast • No Login • Clean UI
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary neon-text text-balance">
            SSA YT-MP4/MP3 Downloader
          </h1>
          <p className="text-muted-foreground text-pretty">
            Fast and free YouTube to MP4/MP3 conversions. Paste a link, preview the video, choose quality, and
            download—simple and secure.
          </p>
          <div className="flex items-center justify-center">
            <ChannelBadge />
          </div>
        </header>

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
              <p>When connected to backend, only essential data is sent.</p>
              <p>Trusted SSA brand—fast, professional, minimal.</p>
            </CardContent>
          </Card>
        </section>

        <footer className="py-6 text-center text-sm text-muted-foreground">Made by SSA</footer>
      </div>
    </main>
  )
}
