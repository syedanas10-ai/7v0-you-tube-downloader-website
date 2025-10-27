import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "YouTube SEO Complete Guide • SSA Blog",
  description: "Master YouTube SEO with titles, descriptions, tags, and optimization strategies.",
}

export default function YouTubeSEOPage() {
  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle className="text-2xl">YouTube SEO Complete Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground space-y-4">
            <h3>Understanding YouTube SEO</h3>
            <p>
              YouTube's algorithm prioritizes watch time, engagement, and relevance. SEO on YouTube means optimizing
              your content so the algorithm recommends it to viewers interested in your topic.
            </p>

            <h3>Keyword Research</h3>
            <ul>
              <li>Use YouTube's search bar autocomplete to find popular queries.</li>
              <li>Check TubeBuddy or VidIQ for keyword volume and competition.</li>
              <li>Target long-tail keywords (3+ words) for less competition.</li>
              <li>Analyze top-ranking videos in your niche to understand what works.</li>
            </ul>

            <h3>Title Optimization</h3>
            <ul>
              <li>Include your primary keyword near the beginning.</li>
              <li>Keep titles under 60 characters for full visibility.</li>
              <li>Use power words: "Ultimate," "Complete," "Proven," "Secret."</li>
              <li>Make titles compelling—click-through rate matters.</li>
              <li>Avoid clickbait; misleading titles hurt retention.</li>
            </ul>

            <h3>Description Strategy</h3>
            <ul>
              <li>Write 200-300 words with your primary keyword in the first 2-3 lines.</li>
              <li>Include timestamps for longer videos.</li>
              <li>Add relevant links to your website, social media, and related videos.</li>
              <li>Use natural language; don't keyword stuff.</li>
            </ul>

            <h3>Tags & Categories</h3>
            <ul>
              <li>Add 5-10 relevant tags; prioritize exact-match tags first.</li>
              <li>Include broad and specific tags.</li>
              <li>Select the most relevant category for your video.</li>
            </ul>

            <h3>Thumbnail Design</h3>
            <ul>
              <li>Use high contrast colors and large, readable text.</li>
              <li>Include faces with strong emotions when relevant.</li>
              <li>Keep thumbnails simple—they're small on mobile.</li>
              <li>A/B test thumbnails to find what resonates.</li>
            </ul>

            <h3>Engagement Signals</h3>
            <ul>
              <li>Ask viewers to like, comment, and subscribe in your video.</li>
              <li>Respond to comments to boost engagement metrics.</li>
              <li>Create playlists to increase watch time.</li>
              <li>Use YouTube Shorts to drive traffic to long-form content.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              YouTube SEO is about understanding what viewers search for and delivering exactly that. Focus on watch
              time and engagement first; rankings follow naturally.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
