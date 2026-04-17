"use client"

import { Shield, Clock, Users, Trophy } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const statIcons = [Clock, Users, Trophy, Shield]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1603122101829-e56305b0a5f7?q=80&w=1200&auto=format&fit=crop"
              alt="Professional chauffeur opening car door"
              className="rounded-xl w-full h-[520px] object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              {t.about.badge}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              {t.about.title1}
              <br />
              <span className="text-primary">{t.about.title2}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t.about.para1}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t.about.para2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {t.about.stats.map((stat, i) => {
                const Icon = statIcons[i]
                return (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-serif font-medium text-foreground">{stat.value}</p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
