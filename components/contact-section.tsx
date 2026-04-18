"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, Send } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

/* WhatsApp logo SVG — styled with currentColor so it picks up
   the same gold `text-primary` class as the lucide icons */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ContactCard({ item }: { item: { icon: React.ElementType; label: string; value: string; href: string } }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-lg p-6 cursor-default"
      style={{
        background: "hsl(var(--card))",
        border: `1px solid ${hovered ? "rgba(212,168,67,0.55)" : "rgba(255,255,255,0.07)"}`,
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 0 0 1px rgba(212,168,67,0.2), 0 8px 32px rgba(212,168,67,0.15), 0 2px 8px rgba(0,0,0,0.4)"
          : "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Cursor-tracking shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(212,168,67,0.1) 0%, transparent 60%)`,
        }}
      />

      <div className="relative">
        <motion.div
          animate={hovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 380, damping: 18 }}
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{
            background: hovered ? "rgba(212,168,67,0.22)" : "rgba(212,168,67,0.10)",
            transition: "background 0.3s ease",
          }}
        >
          <item.icon className="w-6 h-6 text-primary" />
        </motion.div>
        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
        <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
          {item.value}
        </a>
      </div>
    </motion.div>
  )
}

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("sent")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const contactInfo = [
    { icon: Phone, label: t.contact.callUs, value: "+65 8686 0775", href: "tel:+6586860775" },
    { icon: Mail, label: t.contact.emailUs, value: "hello@rsclimo.com.sg", href: "mailto:hello@rsclimo.com.sg" },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue, href: "#" },
    { icon: WhatsAppIcon, label: t.contact.whatsapp, value: t.contact.whatsappValue, href: "https://wa.me/6586860775" },
  ]

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            {t.contact.badge}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                {t.contact.formTitle}
              </h3>
              {status === "sent" ? (
                <div className="text-center py-12">
                  <p className="text-primary text-2xl font-serif mb-3">{t.contact.thankYou}</p>
                  <p className="text-muted-foreground">{t.contact.thankYouSub}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">{t.contact.labelName}</label>
                      <Input
                        placeholder={t.contact.placeholderName}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">{t.contact.labelEmail}</label>
                      <Input
                        type="email"
                        placeholder={t.contact.placeholderEmail}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">{t.contact.labelPhone}</label>
                      <Input
                        placeholder={t.contact.placeholderPhone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">{t.contact.labelService}</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">{t.contact.selectService}</option>
                        <option value="airport">{t.contact.serviceAirport}</option>
                        <option value="corporate">{t.contact.serviceCorporate}</option>
                        <option value="events">{t.contact.serviceEvents}</option>
                        <option value="group">{t.contact.serviceGroup}</option>
                        <option value="tour">{t.contact.serviceTour}</option>
                        <option value="other">{t.contact.serviceOther}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">{t.contact.labelMessage}</label>
                    <textarea
                      placeholder={t.contact.placeholderMessage}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-destructive text-sm">{t.contact.errorMsg}</p>
                  )}
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {status === "sending" ? t.contact.sendingBtn : t.contact.sendBtn}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <ContactCard key={item.label} item={item} />
              ))}
            </div>

            {/* Corporate CTA */}
            <Card className="bg-primary border-0">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-medium text-primary-foreground mb-4">
                  {t.contact.corporateTitle}
                </h3>
                <ul className="space-y-3 text-primary-foreground/90 mb-6">
                  {t.contact.corporateBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-primary-foreground mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a href="mailto:hello@rsclimo.com.sg?subject=Corporate%20Account%20Inquiry">
                    {t.contact.corporateBtn}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
