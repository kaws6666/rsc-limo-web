import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Driver App Privacy Policy — Royal Stallion Chauffeurs",
  description: "Privacy policy for the RSC Driver mobile application, covering location tracking, data collection, and driver data rights.",
  alternates: {
    canonical: "/privacy-driver",
  },
}

const lastUpdated = "4 June 2026"

export default function DriverPrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">

          {/* Page Header */}
          <div className="mb-14">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-3">Legal · Driver App</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              RSC Driver Application · Royal Stallion Chauffeurs Pte. Ltd. · Last updated: {lastUpdated}
            </p>
          </div>

          <div className="space-y-12">

            {/* 1 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                1. About This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy applies to the <strong className="text-foreground">RSC Driver</strong> mobile application
                (&ldquo;the App&rdquo;), available on Android and iOS, operated by{" "}
                <strong className="text-foreground">Royal Stallion Chauffeurs Pte. Ltd.</strong> (UEN: 202307060K),
                a company incorporated in Singapore (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The App is provided exclusively to employed or contracted drivers of Royal Stallion Chauffeurs.
                It is not available to the general public. By using the App, you agree to the collection and use
                of information as described in this policy.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                2. Information We Collect
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="text-primary font-semibold mb-2">2.1 Account Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your driver account is created by Royal Stallion Chauffeurs dispatch staff. We hold your
                    name, work email address, and phone number for the purpose of identifying you within the
                    dispatch system. You do not self-register; this data is provided by your employer.
                  </p>
                </div>

                <div>
                  <h3 className="text-primary font-semibold mb-2">2.2 Precise Location Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you start a job in the App, we collect your <strong className="text-foreground">precise GPS location</strong> continuously
                    in the background (latitude, longitude, speed, heading, and accuracy) until the job is marked
                    complete. Location data is recorded approximately every 8 seconds or every 25 metres of movement,
                    whichever occurs first.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong className="text-foreground">Background location</strong> is required so that dispatch can monitor
                    your ETA and route while the app is not in the foreground. Tracking <strong className="text-foreground">begins only when
                    you tap &ldquo;Start Job&rdquo;</strong> and <strong className="text-foreground">stops automatically when you tap
                    &ldquo;Complete Job&rdquo;</strong>. No location data is collected outside of active job sessions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Location data is associated with your driver account and the specific booking ID of the job in progress.
                  </p>
                </div>

                <div>
                  <h3 className="text-primary font-semibold mb-2">2.3 Photos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At two points during a job — when you mark arrival at the pickup location (&ldquo;Arrived&rdquo;)
                    and when you complete the job — the App prompts you to take a photo as operational evidence.
                    These photos are uploaded to our secure cloud storage and linked to the booking record.
                    Photos are used solely for internal job verification and dispute resolution.
                  </p>
                </div>

                <div>
                  <h3 className="text-primary font-semibold mb-2">2.4 Device Token (Push Notifications)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With your permission, we collect a device push notification token to deliver job assignment
                    alerts and operational messages to your device. This token is linked to your driver account
                    and stored securely. You may disable push notifications at any time via your device settings,
                    though this may affect your ability to receive job alerts promptly.
                  </p>
                </div>

                <div>
                  <h3 className="text-primary font-semibold mb-2">2.5 Usage Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We log job status transitions (e.g. job started, arrived, passenger on board, completed)
                    with timestamps. These logs form part of the job record and are used for operational reporting
                    and driver payout calculation.
                  </p>
                </div>

              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                3. How We Use Your Information
              </h2>

              <div className="space-y-4">
                {[
                  ["Job dispatch and tracking", "Location data is used by our dispatch team to monitor active jobs, estimate ETAs, and respond to issues in real time."],
                  ["Operational records", "Job timestamps, status updates, and photos are retained as evidence of service delivery and used in payout calculations and client reporting."],
                  ["Push notifications", "Your device token is used to send job assignment alerts, reassignment notifications, and urgent operational messages."],
                  ["Safety and accountability", "Location history during active jobs may be reviewed in the event of an incident, dispute, or complaint."],
                  ["Service improvement", "Aggregate, anonymised usage patterns may be used internally to improve operational efficiency. No individual data is used for this purpose without further anonymisation."],
                ].map(([title, body]) => (
                  <div key={title as string} className="flex gap-4">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0 translate-y-1" />
                    <div>
                      <span className="text-foreground font-semibold">{title}: </span>
                      <span className="text-muted-foreground leading-relaxed">{body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, rent, or trade your personal data. Your data may be shared only in these limited circumstances:
              </p>
              <div className="space-y-4 mt-4">
                {[
                  ["Internal dispatch team", "Authorised Royal Stallion Chauffeurs operations staff can view your live location and job status during active jobs."],
                  ["Corporate clients (limited)", "A client may see that a driver is en route and an estimated arrival time. Clients do not receive your name, phone number, or precise GPS coordinates directly."],
                  ["Service providers", "We use Supabase (database and storage, hosted on AWS) and Expo (push notification infrastructure) as technical service providers. These providers process data only as instructed by us and under data processing agreements."],
                  ["Legal requirements", "We may disclose your information if required to do so by Singapore law, a court order, or a regulatory authority."],
                ].map(([title, body]) => (
                  <div key={title as string} className="flex gap-4">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0 translate-y-1" />
                    <div>
                      <span className="text-foreground font-semibold">{title}: </span>
                      <span className="text-muted-foreground leading-relaxed">{body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                5. Data Retention
              </h2>
              <div className="space-y-3">
                {[
                  ["Location history", "Retained for 12 months from the date of the job, then permanently deleted."],
                  ["Job evidence photos", "Retained for 24 months from the date of the job."],
                  ["Account data", "Retained for the duration of your engagement with Royal Stallion Chauffeurs, and for up to 2 years after your account is deactivated, in accordance with Singapore's PDPA."],
                  ["Push notification tokens", "Deleted within 30 days of account deactivation."],
                ].map(([cat, ret]) => (
                  <div key={cat as string} className="flex gap-4">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0 translate-y-1" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{cat}: </strong>{ret}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                6. Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All data is transmitted over encrypted HTTPS connections. Data at rest is stored in Supabase
                (AWS-hosted infrastructure with AES-256 encryption). Access to driver data is protected by
                role-based access controls — only authenticated, authorised dispatch staff can view operational data.
                No driver credentials are stored in plain text.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                7. Your Rights (Singapore PDPA)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Under Singapore&apos;s Personal Data Protection Act 2012 (PDPA), you have the right to:
              </p>
              <div className="space-y-3 mt-4">
                {[
                  ["Access", "Request a copy of the personal data we hold about you."],
                  ["Correction", "Request correction of inaccurate personal data."],
                  ["Withdrawal of consent", "Withdraw consent for certain uses of your data. Note that withdrawing consent for location tracking will prevent use of the App during active jobs."],
                  ["Deletion", "Request permanent deletion of your account and associated data, subject to the retention exceptions in Section 5 and any legal/accounting record-keeping obligations."],
                ].map(([right, desc]) => (
                  <div key={right as string} className="flex gap-4">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0 translate-y-1" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{right}: </strong>{desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:hello@rsclimo.com.sg" className="text-primary hover:underline">
                  hello@rsclimo.com.sg
                </a>. We will respond within 30 days.
              </p>
            </section>

            {/* 7.5 — Data Deletion Requests (anchor target for Play Console "Delete data URL") */}
            <section id="data-deletion" className="scroll-mt-28">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                How to Request Account &amp; Data Deletion
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To request deletion of your RSC Driver account and associated personal data:
              </p>
              <ol className="mt-4 space-y-3 list-decimal list-inside text-muted-foreground leading-relaxed">
                <li>
                  Email{" "}
                  <a href="mailto:hello@rsclimo.com.sg?subject=Driver%20account%20deletion%20request" className="text-primary hover:underline">
                    hello@rsclimo.com.sg
                  </a>{" "}
                  from your registered driver email address with the subject line &ldquo;Account Deletion Request&rdquo;.
                </li>
                <li>Include your full name and the phone number linked to your driver account.</li>
                <li>We will verify your identity and confirm the request within 30 days.</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon confirmation, your account, profile information, and photos will be permanently deleted.
                Location history and job records are deleted per the retention schedule in Section 5, or
                immediately upon request where no legal or accounting obligation requires retention.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The RSC Driver App is intended solely for adult professional drivers engaged by Royal Stallion
                Chauffeurs. We do not knowingly collect data from persons under 18 years of age.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                9. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this policy from time to time. Material changes will be communicated via the App
                or by email to your registered address. The &ldquo;Last updated&rdquo; date at the top of this page
                reflects the most recent revision. Continued use of the App after a policy update constitutes
                acceptance of the revised terms.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                10. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For any privacy-related questions or requests:
              </p>
              <div className="mt-4 space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">Royal Stallion Chauffeurs Pte. Ltd.</strong></p>
                <p>Singapore</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hello@rsclimo.com.sg" className="text-primary hover:underline">
                    hello@rsclimo.com.sg
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a href="https://www.rsclimo.com.sg" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    www.rsclimo.com.sg
                  </a>
                </p>
              </div>
            </section>

          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-border flex gap-6">
            <Link href="/terms" className="text-primary hover:text-primary/80 transition-colors text-sm">
              ← Terms & Conditions
            </Link>
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors text-sm">
              ← Back to Home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
