import { notFound } from "next/navigation"
import { getVehicleBySlug, vehicles } from "@/lib/vehicles"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Phone, MessageCircle, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const vehicle = getVehicleBySlug(slug)
  if (!vehicle) return {}
  return {
    title: `${vehicle.name} | Royal Stallion Chauffeurs Singapore`,
    description: vehicle.description,
  }
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const vehicle = getVehicleBySlug(slug)
  if (!vehicle) notFound()

  const waText = encodeURIComponent(
    `Hi RSC Limo, I would like to book the ${vehicle.name}`
  )
  const waLink = `https://wa.me/6586860775?text=${waText}`

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${vehicle.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="relative z-10 container mx-auto px-6 pb-12">
            <Link
              href="/#fleet"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Fleet
            </Link>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-2">
              {vehicle.category}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-4">
              {vehicle.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Up to {vehicle.passengers} passengers
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                {vehicle.luggage} luggage pieces
              </span>
              <span className="text-primary font-semibold text-lg">{vehicle.startingPrice}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Vehicle Image */}
              <div className="bg-secondary rounded-xl p-8 flex items-center justify-center min-h-[300px]">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain max-h-[350px]"
                />
              </div>

              {/* Description + Features */}
              <div>
                <h2 className="font-serif text-3xl font-medium text-foreground mb-6">
                  About This Vehicle
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {vehicle.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {vehicle.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  >
                    <a href={waLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Book via WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:bg-secondary gap-2"
                  >
                    <a href="tel:+6586860775">
                      <Phone className="w-5 h-5" />
                      +65 8686 0775
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-medium text-foreground mb-2 text-center">
                Pricing &amp; Rates
              </h2>
              <p className="text-muted-foreground text-center mb-10">
                All prices are inclusive of a professional chauffeur and 24/7 availability.
              </p>

              {/* Pricing Table */}
              <div className="rounded-xl overflow-hidden border border-border mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary">
                      <th className="px-6 py-4 text-left text-primary-foreground font-semibold">Service</th>
                      <th className="px-6 py-4 text-right text-primary-foreground font-semibold">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicle.pricing.map((row, i) => (
                      <tr
                        key={row.service}
                        className={i % 2 === 0 ? "bg-card" : "bg-background"}
                      >
                        <td className="px-6 py-4 text-muted-foreground">{row.service}</td>
                        <td className="px-6 py-4 text-right text-foreground font-semibold">{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Surcharges */}
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Surcharges &amp; Additional Fees
              </h3>
              <ul className="space-y-2 mb-10">
                {vehicle.surcharges.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">✦</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              {/* T&Cs */}
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Terms &amp; Conditions
              </h3>
              <ul className="space-y-1">
                {[
                  "All prices are subject to prevailing GST",
                  "Advance booking of 24+ hours is recommended",
                  "Cancellations must be made at least 24 hours before pickup",
                  "No-shows and late cancellations will be charged in full",
                  "Smoking is strictly prohibited in all vehicles",
                  "Pets are not permitted without prior arrangement",
                  "Child safety seats are available upon request",
                  "Quoted rates apply for standard transfers within Singapore",
                  "Cross-border and Malaysia/Batam rates are quoted separately",
                  "RSC reserves the right to substitute with a vehicle of equal or higher class",
                ].map((term) => (
                  <li key={term} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-primary/60 mt-1">›</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-medium text-foreground mb-4">
              Ready to Book the {vehicle.name}?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our team is available 24/7 — WhatsApp us to check availability and confirm your booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary gap-2"
              >
                <Link href="/#contact">
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
