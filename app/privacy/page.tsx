import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | SSA YouTube Tools",
  description: "Learn how SSA YouTube Tools collects, uses, and protects your data.",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">
        This Privacy Policy explains how SSA YouTube Tools (“we”, “us”, or “our”) collects, uses, and protects
        information in connection with our website and services.
      </p>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Information We Collect</h2>
        <p className="text-muted-foreground">
          We do not require account registration. When you use the downloader, we may process the video URL you provide
          to fetch the requested content. Basic technical information, such as IP address and browser details, may be
          logged by our hosting provider for security and analytics.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">How We Use Information</h2>
        <p className="text-muted-foreground">
          We use submitted URLs solely to generate the requested video or audio file and to improve service reliability.
          We do not sell personal information. Aggregated, non-identifying analytics may be used to understand feature
          usage and performance.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Cookies and Analytics</h2>
        <p className="text-muted-foreground">
          Our site may use cookies or local storage to enable essential features (e.g., preferences) and
          privacy-friendly analytics. You can control cookies via your browser settings. Disabling certain cookies may
          impact functionality.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Data Retention</h2>
        <p className="text-muted-foreground">
          Download requests are processed transiently. We do not permanently store your video links or downloaded files.
          Any server logs containing IP addresses are retained for a limited time for security and operational purposes.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Third-Party Services</h2>
        <p className="text-muted-foreground">
          We may rely on third-party providers (e.g., hosting, CDN) to deliver our service. These providers may process
          limited technical data to perform their functions as described in their own privacy policies.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Your Choices</h2>
        <p className="text-muted-foreground">
          You can choose not to provide a URL. You may also block cookies in your browser. To request information about
          any data associated with your use, contact us via the details below.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Contact</h2>
        <p className="text-muted-foreground">For privacy inquiries, please contact the SSA YouTube Tools team.</p>
      </section>
    </main>
  )
}
