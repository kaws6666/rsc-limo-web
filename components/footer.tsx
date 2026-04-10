"use client"

import { Phone, Mail, Facebook } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const footerServices = [
  { label: "Airport Transfers", labelZh: "机场接送", href: "#services" },
  { label: "Corporate Travel", labelZh: "企业商务出行", href: "#services" },
  { label: "Events & Weddings", labelZh: "活动与婚礼", href: "#services" },
  { label: "Group Transport", labelZh: "团体运输", href: "#services" },
  { label: "City Tours", labelZh: "城市观光", href: "#services" },
]

const footerFleet = [
  { label: "Toyota Alphard AG40", href: "/fleet/toyota-alphard" },
  { label: "Mercedes S-Class", href: "/fleet/mercedes-s-class" },
  { label: "Mercedes E-Class", href: "/fleet/mercedes-e-class" },
  { label: "Mercedes V-Class", href: "/fleet/mercedes-v-class" },
  { label: "Minibus & Coach", labelZh: "小型巴士 & 豪华巴士", href: "/fleet/toyota-hiace" },
]

const footerCompany = [
  { label: "About Us", labelZh: "关于我们", href: "#about" },
  { label: "Our Fleet", labelZh: "我们的车队", href: "#fleet" },
  { label: "Testimonials", labelZh: "客户评价", href: "#" },
  { label: "Join Our Team", labelZh: "加入我们", href: "#" },
  { label: "Contact", labelZh: "联系我们", href: "#contact" },
]

export function Footer() {
  const { lang, t } = useLanguage()

  return (
    <footer className="bg-secondary border-t border-border" style={{ backgroundColor: "#050505" }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Royal Stallion Chauffeurs"
                className="h-16 w-auto"
              />
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              {t.footer.tagline}
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
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {lang === "zh" && link.labelZh ? link.labelZh : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">{t.footer.fleetTitle}</h4>
            <ul className="space-y-3">
              {footerFleet.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {lang === "zh" && link.labelZh ? link.labelZh : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-foreground mb-6">{t.footer.companyTitle}</h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {lang === "zh" && link.labelZh ? link.labelZh : link.label}
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
              {t.footer.privacy}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
