import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Thumbnail Design Masterclass • SSA Blog",
  description: "Create eye-catching thumbnails that boost click-through rates.",
}

export default function ThumbnailDesignPage() {
  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle className="text-2xl">Thumbnail Design Masterclass</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground space-y-4">
            <h3>Why Thumbnails Matter</h3>
            <p>
              Your thumbnail is the first impression viewers get. A compelling thumbnail can increase click-through rate
              (CTR) by 30-50%, directly impacting your video's performance and reach.
            </p>

            <h3>Design Principles</h3>
            <ul>
              <li>
                <strong>Contrast:</strong> Use complementary colors to make elements pop.
              </li>
              <li>
                <strong>Simplicity:</strong> Avoid clutter. Viewers see thumbnails at 168x94 pixels on desktop.
              </li>
              <li>
                <strong>Readability:</strong> Text must be readable at small sizes. Use bold, sans-serif fonts.
              </li>
              <li>
                <strong>Consistency:</strong> Maintain a recognizable style across your channel.
              </li>
              <li>
                <strong>Emotion:</strong> Use faces with strong expressions to create connection.
              </li>
            </ul>

            <h3>Color Psychology</h3>
            <ul>
              <li>
                <strong>Red:</strong> Grabs attention, creates urgency. Use sparingly.
              </li>
              <li>
                <strong>Yellow:</strong> Energetic, positive, stands out on dark backgrounds.
              </li>
              <li>
                <strong>Blue:</strong> Trustworthy, calm. Good for educational content.
              </li>
              <li>
                <strong>Green:</strong> Growth, success. Popular for finance and self-improvement.
              </li>
              <li>
                <strong>Orange:</strong> Friendly, approachable. Great for lifestyle content.
              </li>
            </ul>

            <h3>Text on Thumbnails</h3>
            <ul>
              <li>Use 1-3 words maximum. Keep it punchy.</li>
              <li>Place text in the bottom third to avoid YouTube's title overlay.</li>
              <li>Use white or bright colors for text on dark backgrounds.</li>
              <li>Add a subtle outline or shadow for readability.</li>
              <li>Avoid all caps unless it's a single word.</li>
            </ul>

            <h3>Face & Expression</h3>
            <ul>
              <li>Include your face when possible—it increases trust and connection.</li>
              <li>Use strong emotions: surprise, excitement, curiosity.</li>
              <li>Look directly at the camera or toward the main element.</li>
              <li>Avoid neutral expressions; they don't grab attention.</li>
            </ul>

            <h3>Tools for Thumbnail Design</h3>
            <ul>
              <li>
                <strong>Canva:</strong> User-friendly, templates, free version available.
              </li>
              <li>
                <strong>Photoshop:</strong> Professional, full control, steep learning curve.
              </li>
              <li>
                <strong>GIMP:</strong> Free alternative to Photoshop.
              </li>
              <li>
                <strong>Figma:</strong> Collaborative, modern, great for teams.
              </li>
            </ul>

            <h3>A/B Testing Thumbnails</h3>
            <ul>
              <li>YouTube Studio allows you to test different thumbnails.</li>
              <li>Change one element at a time to isolate what works.</li>
              <li>Track CTR and impressions to measure success.</li>
              <li>Iterate based on data, not assumptions.</li>
            </ul>

            <h3>Common Mistakes to Avoid</h3>
            <ul>
              <li>Blurry or low-resolution images.</li>
              <li>Too much text or small fonts.</li>
              <li>Inconsistent branding across videos.</li>
              <li>Misleading thumbnails that don't match content (hurts retention).</li>
              <li>Copying competitors instead of developing your style.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              Great thumbnails are a combination of design principles, psychology, and testing. Invest time in creating
              custom thumbnails—it's one of the highest ROI activities for growing your channel.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
