"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, TrendingUp, Zap } from "lucide-react"

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

export function HomePageClient() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-20"
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
            Educational Platform • Professional Tools • Free Resources
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Video Creator <span className="gradient-text">Academy & Tools</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master video editing, YouTube growth, and content creation with our comprehensive educational resources and
            professional utility tools.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/learn">
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tools/video-utilities">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Explore Tools
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-4 py-16 md:py-24 bg-background/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What You'll Learn</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides and tutorials for video creators at every level.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {/* Learning Card 1 */}
            <motion.div variants={fadeInUp}>
              <Link href="/learn">
                <Card className="glass-hover h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-sidebar-primary/10 flex items-center justify-center mb-4 group-hover:bg-sidebar-primary/20 transition-colors">
                      <BookOpen className="h-6 w-6 text-sidebar-primary" />
                    </div>
                    <CardTitle>Video Editing Fundamentals</CardTitle>
                    <CardDescription>Master the basics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Learn professional video editing techniques, software recommendations, and workflow optimization.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Learning Card 2 */}
            <motion.div variants={fadeInUp}>
              <Link href="/learn">
                <Card className="glass-hover h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-sidebar-primary/10 flex items-center justify-center mb-4 group-hover:bg-sidebar-primary/20 transition-colors">
                      <TrendingUp className="h-6 w-6 text-sidebar-primary" />
                    </div>
                    <CardTitle>YouTube Growth Strategies</CardTitle>
                    <CardDescription>Grow your channel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      SEO optimization, thumbnail design, and audience engagement strategies for YouTube success.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Learning Card 3 */}
            <motion.div variants={fadeInUp}>
              <Link href="/learn">
                <Card className="glass-hover h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-sidebar-primary/10 flex items-center justify-center mb-4 group-hover:bg-sidebar-primary/20 transition-colors">
                      <Zap className="h-6 w-6 text-sidebar-primary" />
                    </div>
                    <CardTitle>Content Optimization</CardTitle>
                    <CardDescription>Maximize quality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Video formats, quality settings, compression techniques, and mobile optimization best practices.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with expert guides and best practices for creators.
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
                <Card className="glass-hover h-full overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-sidebar-primary/20 to-sidebar-primary/5" />
                  <CardHeader>
                    <CardTitle className="text-lg">Fair Use & Copyright Guide</CardTitle>
                    <CardDescription>Legal best practices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Understand copyright, fair use principles, and how to download content responsibly.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Article 2 */}
            <motion.div variants={fadeInUp}>
              <Link href="/blog/mp4-vs-mp3">
                <Card className="glass-hover h-full overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-sidebar-primary/20 to-sidebar-primary/5" />
                  <CardHeader>
                    <CardTitle className="text-lg">Video Formats Explained</CardTitle>
                    <CardDescription>MP4 vs MP3 comparison</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Compare formats, understand use cases, and choose the right format for your needs.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Article 3 */}
            <motion.div variants={fadeInUp}>
              <Link href="/blog/video-quality-explained">
                <Card className="glass-hover h-full overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-sidebar-primary/20 to-sidebar-primary/5" />
                  <CardHeader>
                    <CardTitle className="text-lg">Resolution & Quality Guide</CardTitle>
                    <CardDescription>480p to 4K explained</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Learn about resolution, quality settings, and file size optimization.
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
                View All Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 bg-background/50">
        <motion.div
          className="mx-auto max-w-2xl text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Master Video Creation?</h2>
          <p className="text-muted-foreground">
            Access our complete learning hub with guides, tutorials, and professional tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn">
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tools/video-utilities">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Explore Tools
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
