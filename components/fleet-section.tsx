"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { vehicleImages } from "@/lib/vehicle-images"

// Map Sanity category values to filter IDs
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

export function FleetSection({ vehicles }: { vehicles: SanityVehicle[] }) {
  const { lang, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: t.fleet.filterAll },
    { id: "executive", label: t.fleet.filterExecutive },
    { id: "luxury-mpv", label: t.fleet.filterMpv },
    { id: "group", label: t.fleet.filterGroup },
  ]

  const filteredFleet = activeCategory === "all"
    ? vehicles
    : vehicles.filter((v) => categoryMap[v.category] === activeCategory)

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            {t.fleet.badge}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            {t.fleet.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.fleet.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={cn(
                "transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((vehicle) => (
            <Card
              key={vehicle.slug}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicleImages[vehicle.slug] ?? '/vehicles/alphard-photo.png'}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5 text-foreground text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-foreground text-sm">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>{vehicle.luggage}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {lang === "zh" && vehicle.nameZh ? vehicle.nameZh : vehicle.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {lang === "zh" && vehicle.descriptionZh ? vehicle.descriptionZh : vehicle.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(lang === "zh" && vehicle.featuresZh ? vehicle.featuresZh : vehicle.features).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                >
                  <Link href={`/fleet/${vehicle.slug}`}>
                    {t.fleet.viewDetails}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
