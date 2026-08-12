import { notFound } from "next/navigation"
import { getAllVehicles, getVehicleBySlug, getSiteSettings } from "@/lib/content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { VehicleContent } from "./vehicle-content"

export async function generateStaticParams() {
  const vehicles = await getAllVehicles()
  return vehicles.map((v: { slug: string }) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const vehicle = await getVehicleBySlug(slug)
  if (!vehicle) return {}
  const title = `${vehicle.name} | Royal Stallion Chauffeurs Singapore`
  return {
    title,
    description: vehicle.description,
    alternates: {
      canonical: `/fleet/${slug}`,
    },
    openGraph: {
      title,
      description: vehicle.description,
      url: `/fleet/${slug}`,
      type: 'website',
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

  return (
    <>
      <Header />
      <VehicleContent vehicle={vehicle} siteSettings={siteSettings} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
