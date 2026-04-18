"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { vehicleImages } from "@/lib/vehicle-images"
import { motion, AnimatePresence } from "framer-motion"

const categoryMap: Record<string, string> = {
  'EXECUTIVE SEDAN': 'executive',
  'LUXURY MPV': 'luxury-mpv',
  'PREMIUM MPV': 'luxury-mpv',
  'GROUP TRANSPORT': 'group',
  'COACH': 'group',
}

type SanityVehicle = {
  slug: string
  name: string
  nameZh?: string
  category: string
  passengers: number
  luggage: number
  description: string
  descriptionZh?: string
  features: string[]
  featuresZh?: string[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
}

function FleetCard({ vehicle, index, lang, t }: {
  vehicle: SanityVehicle
  index: number
  lang: string
  t: { fleet: { viewDetails: string } }
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      key={vehicle.slug}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      layout
      whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-lg bg-card"
      style={{
        border: `1px solid ${hovered ? "rgba(212,168,67,0.5)" : "rgba(255,255,255,0.07)"}`,
        transition: "border-color 0.35s ease, box-shadow 0.35s ease",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,168,67,0.15), 0 8px 24px rgba(212,168,67,0.08)"
          : "0 2px 12px rgba(0,0,0,0.3)",
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={vehicleImages[vehicle.slug] ?? '/vehicles/alphard-photo.png'}
          alt={vehicle.name}
          animate={hovered ? { scale: 1.07, y: -6 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full object-cover"
        />

        {/* Gradient — deepens on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            opacity: hovered ? 1 : 0.75,
          }}
        />

        {/* Gold shimmer sweep on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={hovered ? { opacity: 1, x: "100%" } : { opacity: 0, x: "-100%" }}
          initial={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(212,168,67,0.12) 50%, transparent 60%)",
          }}
        />

        {/* Pax / luggage badges */}
        <div className="absolute bottom-4 left-4 flex gap-4">
          <div className="flex items-center gap-1.5 text-white text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span>{vehicle.passengers}</span>
          </div>
          <div className="flex items-center gap-1.5 text-white text-sm">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>{vehicle.luggage}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-foreground mb-2">
          {lang === "zh" && vehicle.nameZh ? vehicle.nameZh : vehicle.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {lang === "zh" && vehicle.descriptionZh ? vehicle.descriptionZh : vehicle.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {(lang === "zh" && vehicle.featuresZh ? vehicle.featuresZh : vehicle.features).map((feature) => (
            <span
              key={feature}
              className="text-xs px-2 py-1 rounded"
              style={{ background: "rgba(212,168,67,0.08)", color: "rgba(212,168,67,0.75)", border: "1px solid rgba(212,168,67,0.15)" }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* "View Details" — arrow slides right on hover */}
        <Link
          href={`/fleet/${vehicle.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
        >
          {t.fleet.viewDetails}
          <motion.span
            animate={hovered ? { x: 5 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}

export function FleetSection({ vehicles }: { vehicles: SanityVehicle[] }) {
  const { lang, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all",        label: t.fleet.filterAll },
    { id: "executive",  label: t.fleet.filterExecutive },
    { id: "luxury-mpv", label: t.fleet.filterMpv },
    { id: "group",      label: t.fleet.filterGroup },
  ]

  const filteredFleet = activeCategory === "all"
    ? vehicles
    : vehicles.filter((v) => categoryMap[v.category] === activeCategory)

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            {t.fleet.badge}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            {t.fleet.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.fleet.subtitle}
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-250 border",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_16px_rgba(212,168,67,0.3)]"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid — AnimatePresence handles filter transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((vehicle, i) => (
              <FleetCard
                key={vehicle.slug}
                vehicle={vehicle}
                index={i}
                lang={lang}
                t={t}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
