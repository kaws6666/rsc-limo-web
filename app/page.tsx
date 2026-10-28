import type { Metadata } from "next"
import { Header } from "@/components/header"
import { CinematicHeroSection } from "@/components/cinematic-hero-section"
import { ServicesSection } from "@/components/services-section"
import { FleetSection } from "@/components/fleet-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getAllVehicles } from "@/lib/content"
import { FaqSection } from "@/components/faq-section"
import { HOME_FAQS } from "@/lib/faq-data"
import { JsonLd, faqJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default async function Home() {
  const vehicles = await getAllVehicles()

  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={faqJsonLd(HOME_FAQS)} />
      <Header />
      <CinematicHeroSection />
      <ServicesSection />
      <FleetSection vehicles={vehicles} />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection faqs={HOME_FAQS} />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
