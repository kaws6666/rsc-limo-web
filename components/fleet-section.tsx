"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const fleet = [
  {
    slug: "toyota-alphard",
    name: "Toyota Alphard AG40",
    category: "luxury-mpv",
    passengers: 6,
    luggage: 4,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2940&auto=format&fit=crop",
    description: "Japan's most prestigious MPV — the latest AG40 generation with premium leather, dual rear monitors, and unrivalled cabin space.",
    features: ["Dual Rear Monitors", "Premium Leather", "Ambient Lighting"]
  },
  {
    slug: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    category: "executive",
    passengers: 3,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2940&auto=format&fit=crop",
    description: "The pinnacle of luxury sedans. Unmatched elegance and serenity for VIP transfers and C-suite executive travel.",
    features: ["Massage Seats", "Burmester Sound", "Executive Rear Package"]
  },
  {
    slug: "mercedes-e-class",
    name: "Mercedes-Benz E-Class",
    category: "executive",
    passengers: 3,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2940&auto=format&fit=crop",
    description: "Business-class refinement for daily executive transport, airport transfers, and client-facing journeys.",
    features: ["Leather Interior", "Dual-Zone Climate", "USB Charging"]
  },
  {
    slug: "mercedes-v-class",
    name: "Mercedes-Benz V-Class",
    category: "luxury-mpv",
    passengers: 7,
    luggage: 5,
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2940&auto=format&fit=crop",
    description: "Spacious luxury for larger groups — conference-style seating without compromising on Mercedes-Benz refinement.",
    features: ["Captain Seats", "Panoramic Roof", "Rear Climate Zone"]
  },
  {
    slug: "toyota-hiace",
    name: "13-Seater Toyota Hiace",
    category: "group",
    passengers: 13,
    luggage: 10,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2940&auto=format&fit=crop",
    description: "Ideal for corporate teams, tour groups, and medium-sized events requiring comfortable and reliable group transport.",
    features: ["Air Conditioning", "Ample Boot Space", "Reclining Seats"]
  },
  {
    slug: "40-seater-bus",
    name: "40-Seater Coach",
    category: "group",
    passengers: 40,
    luggage: 40,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2940&auto=format&fit=crop",
    description: "Full-size coach for large corporate events, conferences, and group transfers anywhere across Singapore.",
    features: ["Reclining Seats", "Entertainment System", "Air Conditioning"]
  },
]

const categories = [
  { id: "all", label: "All Vehicles" },
  { id: "executive", label: "Executive Sedans" },
  { id: "luxury-mpv", label: "Luxury MPVs" },
  { id: "group", label: "Group Transport" },
]

export function FleetSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredFleet = activeCategory === "all" 
    ? fleet 
    : fleet.filter(vehicle => vehicle.category === activeCategory)

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Our Fleet
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            A Vehicle for Every Occasion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From intimate executive sedans to spacious coaches, our meticulously 
            maintained fleet ensures the perfect ride for any requirement.
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
              key={vehicle.name}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={vehicle.image} 
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
                  {vehicle.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {vehicle.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature) => (
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
                    View Details
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
