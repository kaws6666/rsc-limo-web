"use client"

import { Shield, Clock, Award, Users } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const statIcons = [Clock, Users, Award, Shield]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop"
                alt="Professional chauffeur opening car door"
                className="rounded-lg w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-lg" />

            {/* Stats overlay card */}
            <div className="absolute -bottom-10 -left-10 bg-card border border-border rounded-lg p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-serif font-medium text-foreground">10+</p>
                  <p className="text-muted-foreground text-sm">{t.about.yearsOverlay}</p>
                </div>
              </div>
            </div>
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
