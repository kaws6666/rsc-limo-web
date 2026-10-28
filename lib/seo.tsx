export const SITE_URL = "https://rsclimo.com.sg"
export const BUSINESS_NAME = "Royal Stallion Chauffeurs"
export const BUSINESS_ID = `${SITE_URL}/#business`
export const PHONE_E164 = "+6596194333"
export const PHONE_DISPLAY = "+65 9619 4333"
export const EMAIL = "hello@rsclimo.com.sg"

export type Faq = { q: string; a: string }

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function serviceJsonLd(opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: "Singapore" },
  }
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
