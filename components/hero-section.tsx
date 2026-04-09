"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2940&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-background/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-6 font-medium">
          {t.hero.badge}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-8 text-balance leading-tight">
          {t.hero.title1}
          <br />
          <span className="text-primary">{t.hero.title2}</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-base px-8 py-6 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">
              {t.hero.bookBtn}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 gap-2 border-border text-foreground hover:bg-secondary">
            <a href="tel:+6586860775">
              <Phone className="w-5 h-5" />
              +65 8686 0775
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
