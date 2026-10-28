import { notFound } from "next/navigation"
import { getAllVehicles, getVehicleBySlug, getSiteSettings } from "@/lib/content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { VehicleContent } from "./vehicle-content"
import { JsonLd, SITE_URL, BUSINESS_ID, breadcrumbJsonLd } from "@/lib/seo"
import { vehicleImages } from "@/lib/vehicle-images"

export async function generateStaticParams() {
  const vehicles = await getAllVehicles()
  return vehicles.map((v: { slug: string }) => ({ slug: v.slug }))
}

function trimDescription(text: string, max = 155) {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const vehicle = await getVehicleBySlug(slug)
  if (!vehicle) return {}
  const title = `${vehicle.name} Chauffeur Service Singapore`
  const description = trimDescription(`${vehicle.name} with a professional chauffeur in Singapore. ${vehicle.description}`)
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/fleet/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/fleet/${slug}`,
      type: 'website',
      locale: 'en_SG',
      images: [{ url: vehicleImages[slug] ?? '/og-image.jpg', alt: `${vehicle.name} chauffeur service in Singapore` }],
    },
  }
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [vehicle, siteSettings] = await Promise.all([
    getVehicleBySlug(slug),
    getSiteSettings(),
  ])
  if (!vehicle) notFound()

  const minPrice = Number(vehicle.startingPrice.match(/\d+/)?.[0])
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${vehicle.name} chauffeur service`,
    serviceType: 'Chauffeur service',
    description: vehicle.description,
    url: `${SITE_URL}/fleet/${vehicle.slug}`,
    image: `${SITE_URL}${vehicleImages[vehicle.slug] ?? '/og-image.jpg'}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'Country', name: 'Singapore' },
    ...(Number.isFinite(minPrice) && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'SGD',
        priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'SGD', minPrice },
      },
    }),
  }

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Fleet', path: '/#fleet' }, { name: vehicle.name, path: `/fleet/${vehicle.slug}` }])} />
      <Header />
      <VehicleContent vehicle={vehicle} siteSettings={siteSettings} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
