import { notFound } from "next/navigation"
import { getAllVehicles, getVehicleBySlug } from "@/sanity/lib/queries"
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
  return {
    title: `${vehicle.name} | Royal Stallion Chauffeurs Singapore`,
    description: vehicle.description,
  }
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const vehicle = await getVehicleBySlug(slug)
  if (!vehicle) notFound()

  return (
    <>
      <Header />
      <VehicleContent vehicle={vehicle} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
