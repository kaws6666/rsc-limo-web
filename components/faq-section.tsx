import { ChevronDown } from "lucide-react"
import type { Faq } from "@/lib/seo"

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-serif text-lg font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="bg-background py-24 scroll-mt-20">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">FAQ</p>
          <h2 className="mb-4 text-balance font-serif text-4xl font-medium text-foreground md:text-5xl">
            Chauffeur service in Singapore: common questions
          </h2>
        </div>
        <FaqList faqs={faqs} />
      </div>
    </section>
  )
}
