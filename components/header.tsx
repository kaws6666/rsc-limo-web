"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Header() {
  const { lang, setLang, t } = useLanguage()
  const [isScrolled, setIsScrolled]   = useState(false)
  const [isVisible,  setIsVisible]    = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const heroEl = document.getElementById("cinematic-hero")

    if (!heroEl) {
      /* No cinematic hero on this page — show header normally on any scroll */
      setIsVisible(true)
      const handleScroll = () => setIsScrolled(window.scrollY > 50)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }

    /* Homepage: hide header while the hero is in the viewport (including
       while it is pinned). Show it the moment it scrolls out of view upward. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        const pastHero = !entry.isIntersecting && entry.boundingClientRect.top < 0
        setIsVisible(pastHero)
        setIsScrolled(pastHero)
      },
      { threshold: 0 },
    )
    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: isHome ? "#services" : "/#services", label: t.nav.services },
    { href: isHome ? "#fleet" : "/#fleet", label: t.nav.fleet },
    { href: isHome ? "#about" : "/#about", label: t.nav.about },
    { href: isHome ? "#contact" : "/#contact", label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      } ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={isHome ? "#" : "/"} className="flex items-center">
            <img
              src="/logo.png"
              alt="Royal Stallion Chauffeurs"
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons + Lang Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-border rounded-md overflow-hidden text-xs">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1.5 transition-colors ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("zh")}
                className={`px-2.5 py-1.5 transition-colors ${
                  lang === "zh"
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                中文
              </button>
            </div>
            <a href="tel:+6586860775" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+65 8686 0775</span>
            </a>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={isHome ? "#contact" : "/#contact"}>{t.nav.getQuote}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile lang switcher */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Language:</span>
                <div className="flex items-center gap-1 border border-border rounded-md overflow-hidden text-xs">
                  <button
                    onClick={() => setLang("en")}
                    className={`px-2.5 py-1.5 transition-colors ${
                      lang === "en"
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang("zh")}
                    className={`px-2.5 py-1.5 transition-colors ${
                      lang === "zh"
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    中文
                  </button>
                </div>
              </div>
              <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={isHome ? "#contact" : "/#contact"} onClick={() => setIsMobileMenuOpen(false)}>{t.nav.getQuote}</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
