import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnersSection } from "@/components/partners-section"

export const metadata = {
  title: "Our Partners",
  description: "The hotels, resorts, mobility platforms and organisations that trust Royal Stallion Chauffeurs for premium chauffeur services in Singapore.",
  alternates: {
    canonical: "/partners",
  },
}

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <PartnersSection />
      </main>
      <Footer />
    </>
  )
}
