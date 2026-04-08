import { Briefcase, Plane, Calendar, Users, Building, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless arrivals and departures at Changi Airport with meet-and-greet service and flight monitoring."
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Reliable executive transportation for business meetings, conferences, and corporate events."
  },
  {
    icon: Calendar,
    title: "Events & Weddings",
    description: "Make your special occasions memorable with our elegant fleet and professional chauffeurs."
  },
  {
    icon: Users,
    title: "Group Transport",
    description: "Spacious minibuses and coaches for corporate outings, tours, and large group transfers."
  },
  {
    icon: Building,
    title: "B2B Solutions",
    description: "Tailored corporate accounts with dedicated fleet allocation and preferential rates."
  },
  {
    icon: MapPin,
    title: "City Tours",
    description: "Discover Singapore&apos;s attractions in comfort with our knowledgeable chauffeur guides."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Our Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Excellence in Every Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From individual travelers to corporate clients, we provide comprehensive 
            transportation solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
