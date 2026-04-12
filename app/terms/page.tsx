import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms & Conditions | Privacy Policy — Royal Stallion Chauffeurs",
  description: "Terms of Service and Privacy Policy for Royal Stallion Chauffeurs Pte. Ltd.",
}

const lastUpdated = "12 April 2026"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">

          {/* Page Header */}
          <div className="mb-14">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-3">Legal</p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">
              Royal Stallion Chauffeurs Pte. Ltd. · Last updated: {lastUpdated}
            </p>
          </div>

          {/* Terms of Service */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-8 pb-3 border-b border-border">
              Terms of Service
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-primary font-semibold mb-2">1. Booking & Confirmation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All bookings are confirmed only upon receipt of a written or verbal confirmation from Royal Stallion Chauffeurs. We reserve the right to decline any booking at our discretion.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">2. Cancellation Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cancellations must be made at least <strong className="text-foreground">24 hours before</strong> the scheduled pick-up time. Cancellations made within 24 hours of the scheduled pick-up are non-refundable. No-shows are non-refundable.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">3. Refund Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds for eligible cancellations (more than 24 hours' notice) will be processed within <strong className="text-foreground">5–7 business days</strong> to the original payment method. Refunds will not be issued for cancellations within 24 hours or for no-shows.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">4. Last-Minute Changes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Changes to booking details — including pick-up time, location, destination, or vehicle type — must be requested at least <strong className="text-foreground">24 hours in advance</strong>. Changes requested within 24 hours are subject to availability and may incur additional charges.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">5. Waiting Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The first <strong className="text-foreground">10 minutes</strong> of waiting time are complimentary for all bookings. Subsequent waiting time is charged at <strong className="text-foreground">$10 per 15 minutes</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">6. Flight Arrival Pickups</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For airport arrival pickups, our drivers will wait up to <strong className="text-foreground">60 minutes from the actual flight landing time</strong> at no charge. Waiting beyond 60 minutes is chargeable at <strong className="text-foreground">$10 per 15 minutes</strong>. Royal Stallion Chauffeurs reserves the right to stand down the driver if contact cannot be established after 60 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">7. Passenger & Luggage Limits</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maximum passenger and luggage capacity is as stated per vehicle. Royal Stallion Chauffeurs reserves the right to refuse boarding if stated limits are exceeded.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">8. Passenger Conduct</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passengers are responsible for any damage caused to the vehicle during the journey. Royal Stallion Chauffeurs reserves the right to terminate a journey without refund in the event of unruly, dangerous, or abusive behaviour.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">9. Force Majeure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Royal Stallion Chauffeurs is not liable for delays or cancellations arising from circumstances beyond our control, including but not limited to traffic conditions, road closures, weather events, accidents, or acts of God.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">10. Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our liability is limited to the cost of the booking. We are not liable for any consequential, indirect, or incidental losses including but not limited to missed flights, missed meetings, or loss of business opportunities.
                </p>
              </div>

            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-medium text-foreground mb-8 pb-3 border-b border-border">
              Privacy Policy
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-primary font-semibold mb-2">11. Data Collection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect personal information — including your name, contact number, email address, and pick-up/drop-off details — solely for the purpose of fulfilling your booking and providing our services.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">12. Data Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your personal data is used exclusively for booking management, service communication, and operational purposes. We do not sell, rent, or share your data with third parties except where required by Singapore law or regulatory authorities.
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">13. Data Retention</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Booking and personal data is retained for up to <strong className="text-foreground">2 years</strong> for business record purposes, in accordance with Singapore's Personal Data Protection Act (PDPA).
                </p>
              </div>

              <div>
                <h3 className="text-primary font-semibold mb-2">14. Data Enquiries</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For any enquiries regarding your personal data, including access, correction, or deletion requests, please contact us at{" "}
                  <a href="mailto:hello@rsclimo.com.sg" className="text-primary hover:underline">
                    hello@rsclimo.com.sg
                  </a>.
                </p>
              </div>

            </div>
          </section>

          {/* Back link */}
          <div className="pt-8 border-t border-border">
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
