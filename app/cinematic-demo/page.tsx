import { CinematicHero } from "./cinematic-hero";
import { ServicesSection } from "@/components/services-section";
import { FleetSection } from "@/components/fleet-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { getAllVehicles } from "@/sanity/lib/queries";

export default async function CinematicDemoPage() {
  const vehicles = await getAllVehicles();

  return (
    <main className="min-h-screen bg-background">

      {/* ── Preview banner — fixed at top, above everything ── */}
      <div className="fixed top-0 inset-x-0 z-[200] flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-amber-500/95 text-black text-xs font-semibold py-2 px-4 backdrop-blur-sm">
        <span>🎬 CINEMATIC PREVIEW</span>
        <span className="opacity-50 hidden sm:inline">|</span>
        <span className="hidden sm:inline">Scroll slowly through the hero to scrub the video</span>
        <span className="opacity-50 hidden sm:inline">|</span>
        <a href="/" className="underline hover:no-underline">← Back to live site</a>
      </div>

      {/* ── Cinematic hero (scroll-scrubbed video) ── */}
      <CinematicHero />

      {/* ── All live site sections, exactly as they appear on rsclimo.com.sg ── */}
      <ServicesSection />
      <FleetSection vehicles={vehicles} />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />

    </main>
  );
}
