import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About SSA Video Creator Academy",
  description: "Learn about our mission to educate and empower video creators worldwide.",
}

export default function AboutPage() {
  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About SSA Video Creator Academy</h1>
          <p className="text-lg text-muted-foreground">
            Empowering creators with knowledge, tools, and resources to succeed in video production.
          </p>
        </div>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              SSA Video Creator Academy exists to democratize video creation education. We believe that anyone with
              passion and the right guidance can create professional-quality content.
            </p>
            <p>
              Our mission is to provide free, comprehensive resources that help creators master video editing, YouTube
              growth, content strategy, and technical optimization.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <ul className="space-y-2">
              <li>
                <strong>Educational Guides:</strong> In-depth articles on video editing, YouTube SEO, content strategy,
                and more.
              </li>
              <li>
                <strong>Video Utilities:</strong> Free tools for format conversion, quality analysis, and optimization.
              </li>
              <li>
                <strong>Best Practices:</strong> Industry-standard techniques and workflows used by professional
                creators.
              </li>
              <li>
                <strong>Community Resources:</strong> Links to tools, software, and communities that support creators.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <ul className="space-y-2">
              <li>
                <strong>Education First:</strong> We prioritize learning and skill development over tool promotion.
              </li>
              <li>
                <strong>Accessibility:</strong> Quality education should be free and available to everyone.
              </li>
              <li>
                <strong>Integrity:</strong> We respect copyright, fair use, and ethical content creation.
              </li>
              <li>
                <strong>Community:</strong> We support creators at every level, from beginners to professionals.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Ready to level up your video creation skills?</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/learn"
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
              >
                Start Learning
              </Link>
              <Link
                href="/blog"
                className="inline-block px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              >
                Read the Blog
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
