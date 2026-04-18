"use client"

import { Briefcase, Plane, Calendar, Users, Building, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

const icons = [Plane, Briefcase, Calendar, Users, Building, MapPin]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

function ServiceCard({
  service,
  icon: Icon,
  index,
}: {
  service: { title: string; description: string }
  icon: React.ElementType
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-lg cursor-default"
      style={{
        background: "#1A1A1A",
        border: `1px solid ${hovered ? "rgba(212,168,67,0.45)" : "rgba(212,168,67,0.12)"}`,
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 12px 40px rgba(212,168,67,0.12), 0 4px 16px rgba(0,0,0,0.4)"
          : "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Shimmer — radial gradient following the cursor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(212,168,67,0.08) 0%, transparent 65%)`,
        }}
      />

      <div className="relative p-8">
        {/* Icon — spring bounce on hover */}
        <motion.div
          animate={hovered ? { scale: 1.12 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
          style={{
            background: hovered ? "rgba(212,168,67,0.22)" : "rgba(212,168,67,0.10)",
            transition: "background 0.3s ease",
          }}
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>

        <h3 className="font-serif text-xl font-medium text-foreground mb-3">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            {t.services.badge}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => (
            <ServiceCard key={service.title} service={service} icon={icons[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
