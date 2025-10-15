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
  title: "SSA YT-MP4/MP3 Downloader",
  description: "Fast and Free YouTube to MP4/MP3 Downloader by SSA.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable} dark antialiased`}>
      {/* ✅ ADD THIS HEAD SECTION WITH ADSENSE CODE */}
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3305001830130873"
          crossOrigin="anonymous"
        />
      </head>
      
      <body className="font-sans min-h-screen flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <header className="border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                SSA YT-MP4/MP3 Downloader
              </Link>
              <div className="flex items-center gap-4">
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <nav aria-label="Footer" className="flex items-center gap-6">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </nav>
              <p className="text-xs text-muted-foreground">© 2025 SSA YouTube Tools - All rights reserved</p>
            </div>
          </footer>
        </Suspense>

        <Analytics />
      </body>
    </html>
  )
}
