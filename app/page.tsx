import { Header } from "@/components/header"
import { CinematicHeroSection } from "@/components/cinematic-hero-section"
import { ServicesSection } from "@/components/services-section"
import { FleetSection } from "@/components/fleet-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getAllVehicles } from "@/sanity/lib/queries"

export default async function Home() {
  const vehicles = await getAllVehicles()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CinematicHeroSection />
      <ServicesSection />
      <FleetSection vehicles={vehicles} />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
