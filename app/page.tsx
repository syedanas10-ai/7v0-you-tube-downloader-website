"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Music, BookOpen } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklch, var(--color-border) 15%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--color-border) 15%, transparent) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklch, var(--color-sidebar-primary) 40%, transparent), transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          className="mx-auto max-w-4xl text-center space-y-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center justify-center mx-auto px-4 py-2 rounded-full border border-sidebar-primary/50 bg-background/50 text-xs text-muted-foreground tracking-wide"
          >
            Free & Fast • No Login • Clean UI
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            SSA Tools — Free Online Video & Audio Utilities
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert, download, and explore tips for creators. Fast, free YouTube to MP4/MP3 downloader and more.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/tools/ytdownloader">
              <Button size="lg" className="w-full sm:w-auto">
                Try YouTube Downloader <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Read Blog
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-24 bg-background/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to download, convert, and optimize your media.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {/* YouTube Downloader Card */}
            <motion.div variants={fadeInUp}>
              <Link href="/tools/ytdownloader">
                <Card className="h-full hover:border-sidebar-primary/50 hover:shadow-lg transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-sidebar-primary/10 flex items-center justify-center mb-4 group-hover:bg-sidebar-primary/20 transition-colors">
                      <Download className="h-6 w-6 text-sidebar-primary" />
                    </div>
                    <CardTitle>YouTube Downloader</CardTitle>
                    <CardDescription>Download videos in MP4 format</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Convert YouTube videos to MP4 with multiple quality options. Fast, free, and no login required.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* MP3 Converter Card */}
            <motion.div variants={fadeInUp}>
              <Link href="/tools/ytdownloader">
                <Card className="h-full hover:border-sidebar-primary/50 hover:shadow-lg transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-sidebar-primary/10 flex items-center justify-center mb-4 group-hover:bg-sidebar-primary/20 transition-colors">
                      <Music className="h-6 w-6 text-sidebar-primary" />
                    </div>
                    <CardTitle>MP3 Converter</CardTitle>
                    <CardDescription>Extract audio from videos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Convert YouTube videos to high-quality audio. Choose from multiple bitrates for the perfect
                      balance.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Blog & Tutorials Card */}
            <motion.div variants={fadeInUp}>
              <Link href="/blog">
                <Card className="h-full hover:border-sidebar-primary/50 hover:shadow-lg transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-sidebar-primary/10 flex items-center justify-center mb-4 group-hover:bg-sidebar-primary/20 transition-colors">
                      <BookOpen className="h-6 w-6 text-sidebar-primary" />
                    </div>
                    <CardTitle>Blog & Tutorials</CardTitle>
                    <CardDescription>Learn best practices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Educational articles about video downloading, formats, quality, and mobile optimization.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with tips, guides, and best practices for creators.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {/* Article 1 */}
            <motion.div variants={fadeInUp}>
              <Link href="/blog/legal-guide">
                <Card className="h-full hover:border-sidebar-primary/50 hover:shadow-lg transition-all cursor-pointer overflow-hidden group">
                  <div className="h-32 bg-gradient-to-br from-sidebar-primary/20 to-sidebar-primary/5 group-hover:from-sidebar-primary/30 transition-colors" />
                  <CardHeader>
                    <CardTitle className="text-lg">How to Use YouTube Responsibly</CardTitle>
                    <CardDescription>Legal guide for downloading</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Learn about fair use, copyright basics, and how to download videos responsibly.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Article 2 */}
            <motion.div variants={fadeInUp}>
              <Link href="/blog/mp4-vs-mp3">
                <Card className="h-full hover:border-sidebar-primary/50 hover:shadow-lg transition-all cursor-pointer overflow-hidden group">
                  <div className="h-32 bg-gradient-to-br from-sidebar-primary/20 to-sidebar-primary/5 group-hover:from-sidebar-primary/30 transition-colors" />
                  <CardHeader>
                    <CardTitle className="text-lg">MP4 vs MP3: Which Format?</CardTitle>
                    <CardDescription>Format comparison guide</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Compare video and audio formats, use cases, and quality differences explained.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Article 3 */}
            <motion.div variants={fadeInUp}>
              <Link href="/blog/video-quality-explained">
                <Card className="h-full hover:border-sidebar-primary/50 hover:shadow-lg transition-all cursor-pointer overflow-hidden group">
                  <div className="h-32 bg-gradient-to-br from-sidebar-primary/20 to-sidebar-primary/5 group-hover:from-sidebar-primary/30 transition-colors" />
                  <CardHeader>
                    <CardTitle className="text-lg">Video Quality: 480p to 4K</CardTitle>
                    <CardDescription>Resolution explained</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Understand resolution, when to use each quality, and file size comparisons.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-background/50">
        <motion.div
          className="mx-auto max-w-2xl text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="text-muted-foreground">
            Download your first video in seconds. No signup, no ads, just fast and reliable conversion.
          </p>
          <Link href="/tools/ytdownloader">
            <Button size="lg" className="w-full sm:w-auto">
              Start Downloading Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
