import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | SSA YouTube Tools",
  description: "Understand the terms and acceptable use for SSA YouTube Tools.",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-4">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">
        These Terms of Service (“Terms”) govern your use of SSA YouTube Tools (“Service”). By using the Service, you
        agree to these Terms.
      </p>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Acceptable Use</h2>
        <p className="text-muted-foreground">
          You are responsible for ensuring you have the rights to download or convert content. Use the Service only for
          lawful purposes and in compliance with applicable copyright laws and the platform’s terms (e.g., YouTube).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Intellectual Property</h2>
        <p className="text-muted-foreground">
          We do not claim ownership over any third-party content. You retain rights to your own content, and you must
          respect the rights of content owners when using the Service.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Service Availability</h2>
        <p className="text-muted-foreground">
          We strive for high availability but do not guarantee uninterrupted service. Features may change or be
          discontinued at any time without notice.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Disclaimer of Warranties</h2>
        <p className="text-muted-foreground">
          The Service is provided “as is” without warranties of any kind. We disclaim all implied warranties, including
          merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">Limitation of Liability</h2>
        <p className="text-muted-foreground">
          To the maximum extent permitted by law, SSA YouTube Tools shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or any loss of data or profits arising from your use of the
          Service.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-lg font-medium">User Responsibilities</h2>
        <p className="text-muted-foreground">
          You must not misuse the Service, attempt to interfere with its operation, or engage in activity that violates
          applicable laws, third-party rights, or these Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Changes and Contact</h2>
        <p className="text-muted-foreground">
          We may update these Terms from time to time. Continued use of the Service after changes constitutes
          acceptance. For questions, please contact the SSA YouTube Tools team.
        </p>
      </section>
    </main>
  )
}
