"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"

const fleet = [
  {
    slug: "toyota-alphard",
    name: "Toyota Alphard / Vellfire",
    category: "luxury-mpv",
    passengers: 6,
    luggage: 4,
    image: "/vehicles/alphard-photo.png",
    description: "Japan's most prestigious MPV — premium leather, refined cabin space, and whisper-quiet ride for the discerning traveller.",
    descriptionZh: "日本最尊贵的MPV——顶级皮革、宽敞静谧的座舱，专为尊贵旅客打造极致舒适体验。",
    features: ["Premium Leather", "Ambient Lighting", "Sliding Door Entry"],
    featuresZh: ["顶级皮革座椅", "氛围灯光", "电动推拉门"],
  },
  {
    slug: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    category: "executive",
    passengers: 3,
    luggage: 3,
    image: "/vehicles/s-class-photo.png",
    description: "The pinnacle of luxury sedans. Unmatched elegance and serenity for VIP transfers and C-suite executive travel.",
    descriptionZh: "豪华轿车的巅峰之作。无与伦比的优雅与宁静，专为贵宾接送及高管出行而打造。",
    features: ["Massage Seats", "Burmester Sound", "Executive Rear Package"],
    featuresZh: ["按摩座椅", "柏林之声音响", "行政后排配置"],
  },
  {
    slug: "mercedes-e-class",
    name: "Mercedes-Benz E-Class",
    category: "executive",
    passengers: 3,
    luggage: 3,
    image: "/vehicles/e-class-photo.png",
    description: "Business-class refinement for daily executive transport, airport transfers, and client-facing journeys.",
    descriptionZh: "商务级精致体验，适用于日常行政出行、机场接送及客户接待。",
    features: ["Leather Interior", "Dual-Zone Climate", "USB Charging"],
    featuresZh: ["皮革内饰", "双区空调", "USB充电"],
  },
  {
    slug: "mercedes-v-class",
    name: "Mercedes-Benz V-Class",
    category: "luxury-mpv",
    passengers: 7,
    luggage: 5,
    image: "/vehicles/v-class-photo.png",
    description: "Spacious luxury for larger groups — conference-style seating without compromising on Mercedes-Benz refinement.",
    descriptionZh: "适合大型团体的宽敞豪华体验——会议式座椅配置，不妥协于奔驰的精致品质。",
    features: ["Captain Seats", "Panoramic Roof", "Rear Climate Zone"],
    featuresZh: ["商务座椅", "全景天窗", "后排独立空调"],
  },
  {
    slug: "toyota-hiace",
    name: "13-Seater Toyota Hiace",
    category: "group",
    passengers: 13,
    luggage: 10,
    image: "/vehicles/hiace-photo.png",
    description: "Ideal for corporate teams, tour groups, and medium-sized events requiring comfortable and reliable group transport.",
    descriptionZh: "适合企业团队、旅游团及中型活动，提供舒适可靠的团体运输服务。",
    features: ["Air Conditioning", "Ample Boot Space", "Reclining Seats"],
    featuresZh: ["全车空调", "宽敞行李空间", "可调节座椅"],
  },
  {
    slug: "40-seater-bus",
    name: "40-Seater Coach",
    category: "group",
    passengers: 40,
    luggage: 40,
    image: "/vehicles/coach-photo.png",
    description: "Full-size coach for large corporate events, conferences, and group transfers anywhere across Singapore.",
    descriptionZh: "全尺寸豪华巴士，适用于大型企业活动、峰会及新加坡各地的团体接送。",
    features: ["Reclining Seats", "Entertainment System", "Air Conditioning"],
    featuresZh: ["可调节座椅", "娱乐系统", "全车空调"],
  },
]

export function FleetSection() {
  const { lang, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: t.fleet.filterAll },
    { id: "executive", label: t.fleet.filterExecutive },
    { id: "luxury-mpv", label: t.fleet.filterMpv },
    { id: "group", label: t.fleet.filterGroup },
  ]

  const filteredFleet = activeCategory === "all"
    ? fleet
    : fleet.filter((v) => v.category === activeCategory)

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
                  {lang === "zh" ? vehicle.descriptionZh : vehicle.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(lang === "zh" ? vehicle.featuresZh : vehicle.features).map((feature) => (
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
