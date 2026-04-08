import { Phone, Mail, Facebook } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Airport Transfers", href: "#services" },
    { label: "Corporate Travel", href: "#services" },
    { label: "Events & Weddings", href: "#services" },
    { label: "Group Transport", href: "#services" },
    { label: "City Tours", href: "#services" },
  ],
  fleet: [
    { label: "Toyota Alphard AG40", href: "#fleet" },
    { label: "Mercedes S-Class", href: "#fleet" },
    { label: "Mercedes E-Class", href: "#fleet" },
    { label: "Mercedes V-Class", href: "#fleet" },
    { label: "Minibus & Coach", href: "#fleet" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Testimonials", href: "#" },
    { label: "Join Our Team", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border" style={{ backgroundColor: "#07101C" }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="font-serif text-primary-foreground text-xl font-bold">R</span>
              </div>
              <div>
                <span className="font-serif text-xl font-medium text-foreground">Royal Stallion</span>
                <span className="text-primary font-serif text-xl font-medium"> Chauffeurs</span>
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Singapore&apos;s premier chauffeur service — delivering luxury transportation
              experiences for corporate clients and discerning individuals.
            </p>
            <div className="space-y-3">
              <a href="tel:+6586860775" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+65 8686 0775</span>
              </a>
              <a href="mailto:hello@rsclimo.com.sg" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@rsclimo.com.sg</span>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">Our Fleet</h4>
            <ul className="space-y-3">
              {footerLinks.fleet.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Royal Stallion Chauffeurs Pte. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
