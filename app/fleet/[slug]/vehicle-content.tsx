"use client"

import { Button } from "@/components/ui/button"
import { Users, Briefcase, Phone, MessageCircle, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
type Vehicle = {
  slug: string
  name: string
  nameZh?: string
  category: string
  categoryZh?: string
  passengers: number
  luggage: number
  startingPrice: string
  description: string
  descriptionZh?: string
  features: string[]
  featuresZh?: string[]
  pricing: { service: string; rate: string }[]
}

type SiteSettings = {
  surcharges?: string[]
  surchargesZh?: string[]
} | null

export function VehicleContent({ vehicle, siteSettings }: { vehicle: Vehicle; siteSettings?: SiteSettings }) {
  const { lang, t } = useLanguage()
  const tv = t.vehicle

  const waText = encodeURIComponent(`Hi RSC Limo, I would like to book the ${vehicle.name}`)
  const waLink = `https://wa.me/6586860775?text=${waText}`

  const description = lang === "zh" && vehicle.descriptionZh ? vehicle.descriptionZh : vehicle.description
  const features = lang === "zh" && vehicle.featuresZh ? vehicle.featuresZh : vehicle.features
  const category = lang === "zh" && vehicle.categoryZh ? vehicle.categoryZh : vehicle.category

  // Local image map
  const imageMap: Record<string, string> = {
    'toyota-alphard': '/vehicles/alphard-photo.png',
    'mercedes-s-class': '/vehicles/s-class-photo.png',
    'mercedes-e-class': '/vehicles/e-class-photo.png',
    'mercedes-v-class': '/vehicles/v-class-photo.png',
    'toyota-hiace': '/vehicles/hiace-photo.png',
    '40-seater-bus': '/vehicles/coach-photo.png',
  }
  const vehicleImage = imageMap[vehicle.slug] ?? '/vehicles/alphard-photo.png'

  const translateService = (s: string) =>
    lang === "zh" ? (tv.serviceNames[s] ?? s) : s
  const translateRate = (r: string) =>
    lang === "zh" ? (tv.serviceNames[r] ?? r) : r

  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${vehicleImage}')` }}
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 container mx-auto px-6 pb-12">
          <Link
            href="/#fleet"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {tv.backToFleet}
          </Link>
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-2">
            {category}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-4">
            {vehicle.name}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              {tv.upTo} {vehicle.passengers} {tv.passengers}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              {vehicle.luggage} {tv.luggage}
            </span>
            <span className="text-primary font-semibold text-lg">{vehicle.startingPrice}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Vehicle Photo — clear-bg PNG floats on dark background */}
            <div
              className="rounded-xl h-[380px]"
              role="img"
              aria-label={vehicle.name}
              style={{
                backgroundColor: '#0d0d0d',
                backgroundImage: `url('${vehicleImage}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            />

            {/* Description + Features */}
            <div>
              <h2 className="font-serif text-3xl font-medium text-foreground mb-6">
                {tv.aboutTitle}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <a href={waLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    {tv.bookWhatsapp}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary gap-2">
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
              {tv.pricingTitle}
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              {tv.pricingSubtitle}
            </p>

            {/* Pricing Table */}
            <div className="rounded-xl overflow-hidden border border-border mb-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary">
                    <th className="px-6 py-4 text-left text-primary-foreground font-semibold">
                      {tv.pricingHeaderService}
                    </th>
                    <th className="px-6 py-4 text-right text-primary-foreground font-semibold">
                      {tv.pricingHeaderRate}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vehicle.pricing.map((row, i) => (
                    <tr key={row.service} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                      <td className="px-6 py-4 text-muted-foreground">{translateService(row.service)}</td>
                      <td className="px-6 py-4 text-right text-foreground font-semibold">{translateRate(row.rate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pricing Disclaimer */}
            <p className="text-xs text-muted-foreground/60 mb-8 flex items-start gap-1.5">
              <span className="text-primary/50 mt-0.5">*</span>
              <span>
                Rates shown are per vehicle per trip and exclude surcharges. Passenger capacity (
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3 h-3 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  {vehicle.passengers}
                </span>) and luggage (
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3 h-3 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
                  {vehicle.luggage} pieces
                </span>) are indicative maximums. Actual capacity may vary by configuration.
              </span>
            </p>

            {/* Surcharges */}
            <h3 className="font-serif text-xl font-medium text-foreground mb-4">
              {tv.surchargesTitle}
            </h3>
            <ul className="space-y-2 mb-10">
              {(
                (lang === "zh" && siteSettings?.surchargesZh?.length
                  ? siteSettings.surchargesZh
                  : siteSettings?.surcharges?.length
                  ? siteSettings.surcharges
                  : tv.surcharges)
              ).map((s) => (
                <li key={s} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✦</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            {/* T&Cs */}
            <p className="text-muted-foreground text-sm">
              By making a booking, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms & Conditions and Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground mb-4">
            {tv.ctaTitle} {vehicle.name}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {tv.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {tv.bookWhatsapp}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary gap-2">
              <Link href="/#contact">
                {tv.requestQuote}
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
