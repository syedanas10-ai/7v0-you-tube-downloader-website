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
          <div className="flex items-center justify-center">
            <Link
              href="/blog"
              className="mt-2 inline-flex items-center rounded-md border border-sidebar-primary/50 bg-background/50 px-4 py-2 text-sm text-primary hover:bg-sidebar-primary/10 transition-colors"
              aria-label="Visit the SSA Blog"
            >
              Visit the Blog
            </Link>
          </div>
        </header>

        {/* ✅ DOWNLOAD FORM FIRST (AS YOU WANTED) */}
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

        {/* ✅ COMPREHENSIVE CONTENT SECTION (LIKE POPULAR SITES) */}
        <div className="educational-content space-y-8">
          
          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span>⚡</span>
              </div>
              <h3 className="font-semibold">Instant Download</h3>
              <p className="text-xs text-muted-foreground mt-1">Get your videos in seconds with high-speed processing</p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span>🎯</span>
              </div>
              <h3 className="font-semibold">Multiple Formats</h3>
              <p className="text-xs text-muted-foreground mt-1">MP4, MP3, WEBM, 3GP and more supported formats</p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span>📱</span>
              </div>
              <h3 className="font-semibold">All Devices</h3>
              <p className="text-xs text-muted-foreground mt-1">Works on PC, Mac, Android, iPhone and tablets</p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span>🛡️</span>
              </div>
              <h3 className="font-semibold">100% Safe</h3>
              <p className="text-xs text-muted-foreground mt-1">No registration, no malware, completely secure</p>
            </div>
          </div>

          {/* How It Works - Detailed */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-6">How to Download YouTube Videos in 4 Easy Steps</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">For Desktop Users</h3>
                <ol className="space-y-2 text-sm">
                  <li><strong>Step 1:</strong> Find the YouTube video you want to download</li>
                  <li><strong>Step 2:</strong> Copy the URL from your browser's address bar</li>
                  <li><strong>Step 3:</strong> Paste the link in the downloader above</li>
                  <li><strong>Step 4:</strong> Choose your preferred format and quality</li>
                  <li><strong>Step 5:</strong> Click download and save your video</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">For Mobile Users</h3>
                <ol className="space-y-2 text-sm">
                  <li><strong>Step 1:</strong> Open YouTube app and find your video</li>
                  <li><strong>Step 2:</strong> Tap "Share" and copy the video link</li>
                  <li><strong>Step 3:</strong> Paste the link in our downloader</li>
                  <li><strong>Step 4:</strong> Select MP4 for video or MP3 for audio</li>
                  <li><strong>Step 5:</strong> Download and enjoy offline viewing</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Format Guide - Expanded */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Complete Format & Quality Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Video Formats Comparison</h3>
                <div className="space-y-3">
                  <div className="bg-background/50 rounded p-3">
                    <h4 className="font-semibold">MP4 Format</h4>
                    <p className="text-xs text-muted-foreground">Most compatible format, works on all devices and media players. Recommended for general use.</p>
                  </div>
                  <div className="bg-background/50 rounded p-3">
                    <h4 className="font-semibold">WEBM Format</h4>
                    <p className="text-xs text-muted-foreground">High quality with smaller file size. Great for web use and modern browsers.</p>
                  </div>
                  <div className="bg-background/50 rounded p-3">
                    <h4 className="font-semibold">3GP Format</h4>
                    <p className="text-xs text-muted-foreground">Legacy format for older mobile devices. Smallest file size but lower quality.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Audio Formats Comparison</h3>
                <div className="space-y-3">
                  <div className="bg-background/50 rounded p-3">
                    <h4 className="font-semibold">MP3 Format</h4>
                    <p className="text-xs text-muted-foreground">Universal audio format, compatible with all music players and devices.</p>
                  </div>
                  <div className="bg-background/50 rounded p-3">
                    <h4 className="font-semibold">M4A Format</h4>
                    <p className="text-xs text-muted-foreground">Advanced audio coding, better quality than MP3 at same bitrate.</p>
                  </div>
                  <div className="bg-background/50 rounded p-3">
                    <h4 className="font-semibold">OGG Format</h4>
                    <p className="text-xs text-muted-foreground">Open source format, efficient compression with good quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality & Resolution Guide */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Video Quality & Resolution Guide</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
              <div className="bg-gradient-to-b from-blue-500/20 to-blue-700/20 rounded-lg p-3 border border-blue-500/30">
                <div className="font-bold text-lg">144p</div>
                <div className="text-xs">Basic Quality</div>
                <div className="text-xs text-muted-foreground mt-1">Smallest size</div>
              </div>
              <div className="bg-gradient-to-b from-green-500/20 to-green-700/20 rounded-lg p-3 border border-green-500/30">
                <div className="font-bold text-lg">360p</div>
                <div className="text-xs">Standard Def</div>
                <div className="text-xs text-muted-foreground mt-1">Good for mobile</div>
              </div>
              <div className="bg-gradient-to-b from-yellow-500/20 to-yellow-700/20 rounded-lg p-3 border border-yellow-500/30">
                <div className="font-bold text-lg">720p</div>
                <div className="text-xs">HD Ready</div>
                <div className="text-xs text-muted-foreground mt-1">Great balance</div>
              </div>
              <div className="bg-gradient-to-b from-orange-500/20 to-orange-700/20 rounded-lg p-3 border border-orange-500/30">
                <div className="font-bold text-lg">1080p</div>
                <div className="text-xs">Full HD</div>
                <div className="text-xs text-muted-foreground mt-1">Best quality</div>
              </div>
              <div className="bg-gradient-to-b from-red-500/20 to-red-700/20 rounded-lg p-3 border border-red-500/30">
                <div className="font-bold text-lg">4K</div>
                <div className="text-xs">Ultra HD</div>
                <div className="text-xs text-muted-foreground mt-1">Maximum detail</div>
              </div>
            </div>
          </div>

          {/* FAQ Section - Expanded */}
          <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Is this YouTube downloader free?</h4>
                  <p className="text-sm text-muted-foreground mt-1">Yes, completely free! No hidden costs, no registration required. Download as many videos as you want without any limitations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">What is the maximum video quality?</h4>
                  <p className="text-sm text-muted-foreground mt-1">We support up to 4K Ultra HD (2160p) quality for compatible videos. Most videos are available in 1080p, 720p, 480p, and 360p.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Can I download YouTube playlists?</h4>
                  <p className="text-sm text-muted-foreground mt-1">Currently we support single video downloads. For playlists, you can download each video individually by copying their URLs separately.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Is downloading YouTube videos legal?</h4>
                  <p className="text-sm text-muted-foreground mt-1">Downloading is generally acceptable for personal use, educational purposes, or content you own. Always respect copyright and use content responsibly.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">How long does processing take?</h4>
                  <p className="text-sm text-muted-foreground mt-1">Most videos process in 10-30 seconds depending on length and quality. Shorter videos and lower qualities process faster.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Do you store downloaded videos?</h4>
                  <p className="text-sm text-muted-foreground mt-1">No, we never store your videos or personal data. All processing happens in real-time and files are deleted immediately after download.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Tips */}
          <div className="bg-muted/50 rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-center mb-4">Pro Tips for Best Results</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li>• <strong>For mobile devices:</strong> Use MP4 format with 720p for optimal quality and storage</li>
                <li>• <strong>For music:</strong> Choose MP3 at 320kbps for best audio quality</li>
                <li>• <strong>For archiving:</strong> Select 1080p MP4 for high quality preservation</li>
              </ul>
              <ul className="space-y-2">
                <li>• <strong>Slow internet?</strong> Choose 360p or 480p for faster downloads</li>
                <li>• <strong>Storage concerns?</strong> WEBM format offers great quality with smaller size</li>
                <li>• <strong>Universal compatibility:</strong> MP4 works on all devices and players</li>
              </ul>
            </div>
          </div>

        </div>

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
              <p>4. Tap Download. That's it.</p>
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
