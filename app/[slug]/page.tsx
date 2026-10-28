import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, Phone, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FaqList } from "@/components/faq-section"
import { LANDING_PAGES, getLandingPage } from "@/lib/landing-pages"
import { VEHICLES } from "@/lib/vehicles-data"
import { vehicleImages } from "@/lib/vehicle-images"
import { EMAIL, PHONE_DISPLAY, PHONE_E164, JsonLd, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return LANDING_PAGES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getLandingPage(slug)
  if (!page) return {}
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      locale: "en_SG",
      url: `/${page.slug}`,
      title: page.title,
      description: page.description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: page.h1 }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/og-image.jpg"] },
  }
}

export default async function LandingPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getLandingPage(slug)
  if (!page) notFound()

  const vehicles = page.vehicleSlugs
    .map((s) => VEHICLES.find((v) => v.slug === s))
    .filter((v): v is (typeof VEHICLES)[number] => Boolean(v))
  const others = LANDING_PAGES.filter((p) => p.slug !== page.slug)
  const waText = encodeURIComponent(`Hi RSC Limo, I would like to enquire about ${page.serviceType.toLowerCase()}`)

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: page.h1, description: page.description, path: `/${page.slug}`, serviceType: page.serviceType })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: page.navLabel, path: `/${page.slug}` }])} />
      <JsonLd data={faqJsonLd(page.faqs)} />
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto max-w-5xl px-6">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{page.navLabel}</span>
          </nav>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">{page.eyebrow}</p>
          <h1 className="mb-8 max-w-3xl text-balance font-serif text-4xl font-medium text-foreground md:text-6xl">{page.h1}</h1>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {page.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${PHONE_E164.slice(1)}?text=${waText}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get a quote on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>

          <section className="mt-20">
            <h2 className="mb-6 font-serif text-3xl font-medium text-foreground">{page.highlightsTitle}</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {page.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-20">
            <h2 className="mb-8 font-serif text-3xl font-medium text-foreground">{page.vehiclesTitle}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vehicles.map((v) => (
                <Link
                  key={v.slug}
                  href={`/fleet/${v.slug}`}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary"
                >
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={vehicleImages[v.slug]}
                      alt={`${v.name} chauffeur service Singapore`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-medium text-foreground">{v.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Up to {v.passengers} passengers · {v.startingPrice}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <h2 className="mb-6 font-serif text-3xl font-medium text-foreground">{page.howTitle}</h2>
            <ol className="space-y-4">
              {page.how.map((step, i) => (
                <li key={step} className="flex gap-4 text-muted-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-sm text-primary">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-20">
            <h2 className="mb-6 font-serif text-3xl font-medium text-foreground">Frequently asked questions</h2>
            <FaqList faqs={page.faqs} />
          </section>

          <section className="mt-20 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-2 font-serif text-2xl font-medium text-foreground">Other chauffeur services in Singapore</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/${o.slug}`} className="text-primary hover:underline">
                    {o.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#fleet" className="text-primary hover:underline">Our fleet</Link>
              </li>
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
