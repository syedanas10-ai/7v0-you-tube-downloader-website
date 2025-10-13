import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Legal Guide • SSA Blog",
  description: "Fair use, responsible downloading, and copyright basics.",
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
            <CardTitle className="text-2xl">YouTube Video Downloading: Complete Legal Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-muted-foreground">
            <h3>Fair Use Basics</h3>
            <p>
              Fair use allows limited use of copyrighted material without permission for purposes like commentary,
              criticism, research, teaching, or parody. It is context-specific and considers factors such as purpose,
              nature, amount used, and market effect.
            </p>

            <h3>Download Responsibly</h3>
            <ul>
              <li>Only download content you have rights to, or where the creator permits downloads.</li>
              <li>Use downloaded clips for commentary, education, or private offline viewing where allowed.</li>
              <li>Always credit original creators when reusing short portions in transformative works.</li>
              <li>Never re-upload full videos as your own or monetize without permission.</li>
            </ul>

            <h3>Copyright Basics</h3>
            <p>
              Creators own the rights to their videos. Unless content is licensed (e.g., Creative Commons) or your use
              clearly falls under fair use, you should get permission before redistributing or publishing downloaded
              material.
            </p>

            <h3>TL;DR</h3>
            <p>
              Be respectful, keep downloads for personal or transformative use, credit creators, and when in doubt, seek
              permission. This is not legal advice—consult a legal professional for specific cases.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
