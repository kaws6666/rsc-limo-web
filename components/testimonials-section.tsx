import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Managing Director, Tech Corp",
    content: "Elite Limousine has been our trusted transportation partner for over 5 years. Their professionalism and reliability are unmatched. Every executive who visits Singapore is impressed by the service quality.",
    rating: 5
  },
  {
    name: "Michael Tan",
    role: "Event Coordinator",
    content: "We used Elite for our annual company gala with 200+ guests. The coordination was flawless - multiple vehicles, perfectly timed arrivals, and impeccably dressed chauffeurs. Simply outstanding.",
    rating: 5
  },
  {
    name: "Jennifer Lim",
    role: "Frequent Business Traveler",
    content: "After a long flight, being greeted by a professional chauffeur with a Mercedes S-Class is the perfect way to start or end my Singapore trips. I wouldn&apos;t book anyone else for airport transfers.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by leading corporations and discerning individuals across Singapore.
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
                
                {/* Quote */}
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
