"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const testimonials = [
  {
    name: "David Lim",
    role: "Managing Director",
    content: "Royal Stallion has been our go-to for executive transfers for years. Every chauffeur is professional, punctual, and discreet — exactly what we need when hosting overseas clients.",
    rating: 5,
  },
  {
    name: "Michelle Tan",
    role: "Event Coordinator",
    content: "We booked RSC for our company gala — multiple vehicles, perfectly timed arrivals, impeccably presented chauffeurs. Not a single hiccup across 80 guests. Highly recommended.",
    rating: 5,
  },
  {
    name: "James Wong",
    role: "Frequent Business Traveller",
    content: "After a long flight, being greeted by a Royal Stallion chauffeur in a Mercedes S-Class is the perfect way to arrive. I wouldn't use anyone else for airport transfers in Singapore.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            {t.testimonials.badge}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote — kept in English as these are real testimonials */}
                <blockquote className="text-foreground leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-primary font-medium text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
