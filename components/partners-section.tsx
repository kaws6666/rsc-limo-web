"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

type Partner = { name: string; logo?: string }

const groups: { title: string; blurb: string; partners: Partner[] }[] = [
  {
    title: "Hospitality & Resorts",
    blurb: "Guest transfers, VIP arrivals and event looping for Singapore's leading hotels and integrated resort.",
    partners: [
      { name: "Resorts World Sentosa", logo: "/partners/resorts-world-sentosa.webp" },
      { name: "QT Singapore", logo: "/partners/qt-singapore.webp" },
      { name: "Amara Singapore" },
      { name: "Como Singapore" },
    ],
  },
  {
    title: "Corporate & Mobility",
    blurb: "Reliable chauffeur capacity for global mobility platforms and growing businesses.",
    partners: [
      { name: "Blacklane", logo: "/partners/blacklane.webp" },
      { name: "SIXT", logo: "/partners/sixt.webp" },
      { name: "GloApp Human Capital", logo: "/partners/gloapp.webp" },
      { name: "OrangeTee & Tie", logo: "/partners/orangetee.webp" },
    ],
  },
  {
    title: "Events & Institutions",
    blurb: "Discreet, punctual transport for event organisers, healthcare and tourism bodies.",
    partners: [
      { name: "Event 360", logo: "/partners/events-360.webp" },
      { name: "Pixo Events", logo: "/partners/pixo-events.webp" },
      { name: "SingHealth", logo: "/partners/singhealth.webp" },
      { name: "Switzerland Tourism", logo: "/partners/switzerland-tourism.webp" },
    ],
  },
]

function PartnerTile({ partner, index }: { partner: Partner; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="group h-32 rounded-xl border border-border bg-card flex items-center justify-center p-4 transition-colors duration-300 hover:border-primary/50"
    >
      {partner.logo ? (
        <div className="relative w-full h-full rounded-md bg-[#F5F5F0] px-4 py-3">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            sizes="(min-width: 1024px) 220px, 45vw"
            className="object-contain p-3"
          />
        </div>
      ) : (
        <span className="font-serif text-lg text-foreground text-center leading-snug group-hover:text-primary transition-colors">
          {partner.name}
        </span>
      )}
    </motion.div>
  )
}

export function PartnersSection() {
  return (
    <>
      <section className="pt-36 pb-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">Our Partners</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground leading-tight mb-6">
            Trusted by the organisations
            <br />
            <span className="text-primary">that set the standard</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            From integrated resorts and global mobility platforms to event organisers and healthcare institutions, businesses across Singapore rely on Royal Stallion Chauffeurs for punctual, discreet, first-class transport.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="mb-6 pb-4 border-b border-border md:flex md:items-end md:justify-between gap-8">
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">{group.title}</h2>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0 md:max-w-md md:text-right">{group.blurb}</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {group.partners.map((partner, i) => (
                  <PartnerTile key={partner.name} partner={partner} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Partner with <span className="text-primary">RSC</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Corporate partners get a dedicated booking portal, priority fleet availability and a 24/7 operations hotline. Tell us about your needs and we will tailor a programme for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/#contact">Enquire Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:hello@rsclimo.com.sg?subject=Corporate%20Partnership%20Enquiry">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
