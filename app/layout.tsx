import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "SSA Tools — Free Online Video & Audio Utilities",
  description: "Convert, download, and explore tips for creators. Fast, free YouTube to MP4/MP3 downloader and more.",
  generator: "v0.app",
  verification: {
    google: "YOUR_ADSENSE_VERIFICATION_CODE", // Replace with your actual AdSense code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable} dark antialiased`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SSA Video Creator Academy",
              description: "Video education platform with tools for creators",
              url: "https://ssa-tools.vercel.app",
              sameAs: ["https://youtube.com/@all_inone_editz7"],
            }),
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <header className="border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
              <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors">
                SSA Academy
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Learn
                </Link>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link
                  href="/tools/video-utilities"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tools
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">SSA Video Creator Academy</h3>
                <p className="text-xs text-muted-foreground max-w-xs">
                  Educational platform for video creators with utility tools.
                </p>
              </div>
              <nav aria-label="Footer" className="flex flex-col gap-3 md:flex-row md:gap-6">
                <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Learning Hub
                </Link>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link
                  href="/tools/video-utilities"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Video Utilities
                </Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </nav>
            </div>
            <div className="mx-auto max-w-6xl px-4 py-4 border-t border-border/60 text-xs text-muted-foreground text-center">
              © 2025 SSA Video Creator Academy - All rights reserved
            </div>
          </footer>
        </Suspense>

        <Analytics />
      </body>
    </html>
  )
}
