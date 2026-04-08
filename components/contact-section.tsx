"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+65 8686 0775",
    href: "tel:+6586860775",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@rsclimo.com.sg",
    href: "mailto:hello@rsclimo.com.sg",
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "24/7, 365 Days",
    href: "#",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/6586860775",
  },
]

export function ContactSection() {
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
      const res = await fetch("https://formspree.io/f/placeholder", {
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

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Ready to Experience Luxury?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Contact us for a personalised quote or to learn more about our
            corporate and individual transportation solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                Request a Quote
              </h3>
              {status === "sent" ? (
                <div className="text-center py-12">
                  <p className="text-primary text-2xl font-serif mb-3">Thank you!</p>
                  <p className="text-muted-foreground">We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                      <Input
                        placeholder="+65 9123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Service Type</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="airport">Airport Transfer</option>
                        <option value="corporate">Corporate Travel</option>
                        <option value="events">Events &amp; Weddings</option>
                        <option value="group">Group Transport</option>
                        <option value="tour">City Tours</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                    <textarea
                      placeholder="Tell us about your transportation needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-destructive text-sm">Something went wrong. Please email us directly.</p>
                  )}
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {status === "sending" ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <Card key={item.label} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Corporate CTA */}
            <Card className="bg-primary border-0">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-medium text-primary-foreground mb-4">
                  Corporate Account Benefits
                </h3>
                <ul className="space-y-3 text-primary-foreground/90 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">•</span>
                    <span>Preferential rates and priority booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">•</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">•</span>
                    <span>Consolidated monthly billing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground mt-1">•</span>
                    <span>Custom fleet allocation</span>
                  </li>
                </ul>
                <Button
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Inquire About Corporate Rates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
