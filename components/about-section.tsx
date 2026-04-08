import { Shield, Clock, Award, Users } from "lucide-react"

const stats = [
  { icon: Clock, value: "24/7", label: "Service Availability" },
  { icon: Users, value: "500+", label: "Corporate Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Safety Record" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2940&auto=format&fit=crop"
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
                  <p className="text-muted-foreground text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              About Royal Stallion Chauffeurs
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Singapore&apos;s Trusted
              <br />
              <span className="text-primary">Chauffeur Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Royal Stallion Chauffeurs is Singapore&apos;s premier luxury ground transportation service.
              Our commitment to excellence, punctuality, and discretion has earned us the trust of
              corporate clients, government agencies, and discerning individuals across the island.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every journey with us is crafted with meticulous attention to detail.
              Our professionally trained chauffeurs, immaculately maintained vehicles,
              and round-the-clock availability ensure you arrive in style — whether
              it&apos;s an airport transfer at dawn or a gala event in the evening.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-medium text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
