"use client"

import { useRef, useEffect, useState } from "react"
import { Shield, Clock, Users, Trophy } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { motion } from "framer-motion"

const statIcons = [Clock, Users, Trophy, Shield]

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseInt(match[1], 10), suffix: match[2] }
}

function AnimatedStat({
  stat,
  icon: Icon,
  index,
}: {
  stat: { value: string; label: string }
  icon: React.ElementType
  index: number
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const numRef  = useRef<HTMLSpanElement>(null)
  const { num, suffix } = parseStatValue(stat.value)
  const [triggered, setTriggered] = useState(false)

  /* IntersectionObserver — immune to Lenis scroll interception */
  useEffect(() => {
    const el = wrapRef.current
    if (!el || triggered) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        setTriggered(true)

        /* Animate the number from 0 → target over 1.8s */
        const span = numRef.current
        if (!span || num === 0) return

        const start     = performance.now()
        const duration  = 1800
        const easeOut   = (t: number) => 1 - Math.pow(1 - t, 3)

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          span.textContent = Math.round(easeOut(progress) * num) + suffix
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [num, suffix, triggered])

  return (
    <motion.div
      ref={wrapRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex items-center gap-4"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.15, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0"
      >
        <Icon className="w-6 h-6 text-primary" />
      </motion.div>

      <div>
        <p className="text-2xl font-serif font-medium text-foreground">
          <span ref={numRef}>0{suffix}</span>
        </p>
        <p className="text-muted-foreground text-sm">{stat.label}</p>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1603122101829-e56305b0a5f7?q=80&w=1200&auto=format&fit=crop"
              alt="Professional chauffeur opening car door"
              className="rounded-xl w-full h-[520px] object-cover"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium"
            >
              {t.about.badge}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight"
            >
              {t.about.title1}
              <br />
              <span className="text-primary">{t.about.title2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              {t.about.para1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              {t.about.para2}
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {t.about.stats.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  stat={stat}
                  icon={statIcons[i]}
                  index={i}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
