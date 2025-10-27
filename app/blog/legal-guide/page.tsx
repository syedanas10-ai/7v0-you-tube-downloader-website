import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Fair Use & Copyright Guide • SSA Blog",
  description: "Understand copyright, fair use principles, and ethical content creation.",
}

export default function LegalGuidePage() {
  return (
    <main className="min-h-[100svh] px-4 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-6 animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Blog
        </Link>

        <Card className="bg-card/60 border-border/60">
          <CardHeader>
            <CardTitle className="text-2xl">Fair Use & Copyright Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground space-y-4">
            <h3>Understanding Copyright</h3>
            <p>
              Copyright automatically protects original creative works, including videos, music, and images. The creator
              owns the copyright unless they explicitly transfer it. Respecting copyright is both ethical and legally
              required.
            </p>

            <h3>What is Fair Use?</h3>
            <p>
              Fair use allows limited use of copyrighted material without permission for purposes like commentary,
              criticism, research, teaching, or parody. However, fair use is context-specific and depends on four
              factors:
            </p>
            <ul>
              <li>
                <strong>Purpose:</strong> Is it transformative (commentary, criticism, education)?
              </li>
              <li>
                <strong>Nature:</strong> What type of work is it (factual vs. creative)?
              </li>
              <li>
                <strong>Amount:</strong> How much of the original did you use?
              </li>
              <li>
                <strong>Market Effect:</strong> Does your use harm the original's market value?
              </li>
            </ul>

            <h3>Download Responsibly</h3>
            <ul>
              <li>Only download content you have rights to or where the creator permits downloads.</li>
              <li>Use downloaded clips for commentary, education, or private offline viewing where allowed.</li>
              <li>Always credit original creators when reusing portions in transformative works.</li>
              <li>Never re-upload full videos as your own or monetize without permission.</li>
              <li>Respect Creative Commons licenses—follow their specific terms.</li>
            </ul>

            <h3>Creative Commons Licenses</h3>
            <p>
              Many creators license their work under Creative Commons, allowing reuse with attribution. Common licenses
              include:
            </p>
            <ul>
              <li>
                <strong>CC BY:</strong> Attribution required.
              </li>
              <li>
                <strong>CC BY-SA:</strong> Attribution + share-alike required.
              </li>
              <li>
                <strong>CC BY-NC:</strong> Attribution + non-commercial use only.
              </li>
              <li>
                <strong>CC0:</strong> Public domain—no restrictions.
              </li>
            </ul>

            <h3>Best Practices for Creators</h3>
            <ul>
              <li>Use royalty-free music and stock footage when available.</li>
              <li>License music properly or use Creative Commons alternatives.</li>
              <li>Get permission before using someone else's content.</li>
              <li>Provide clear attribution in your video description.</li>
              <li>Understand your platform's copyright policies (YouTube, TikTok, etc.).</li>
            </ul>

            <h3>What Happens if You Violate Copyright?</h3>
            <ul>
              <li>Your video may be taken down by the platform.</li>
              <li>Your channel could receive strikes or be terminated.</li>
              <li>You may face legal action and financial penalties.</li>
              <li>Monetization may be disabled on your content.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              Respect copyright, understand fair use, and create ethically. When in doubt, seek permission or use
              licensed content. This is not legal advice—consult a legal professional for specific cases.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
