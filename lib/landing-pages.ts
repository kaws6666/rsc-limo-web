import type { Faq } from "@/lib/seo"

export type LandingPage = {
  slug: string
  navLabel: string
  navLabelZh: string
  serviceType: string
  title: string
  description: string
  h1: string
  eyebrow: string
  intro: string[]
  highlightsTitle: string
  highlights: string[]
  vehicleSlugs: string[]
  vehiclesTitle: string
  howTitle: string
  how: string[]
  faqs: Faq[]
  lastModified: string
}

// Copy only restates what is already published on the homepage and vehicle pages
// (services, fleet, starting prices, surcharges, corporate account benefits) —
// no new claims. Review before changing anything factual.
export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "airport-transfer-singapore",
    navLabel: "Airport Transfers",
    navLabelZh: "机场接送",
    serviceType: "Airport transfer",
    title: "Airport Transfer Singapore | Changi Airport Chauffeur Service",
    description:
      "Private chauffeur airport transfers to and from Changi Airport. Meet-and-greet, flight monitoring and a premium fleet from Alphard to S-Class. Available 24/7.",
    h1: "Changi Airport chauffeur transfers",
    eyebrow: "Airport transfers · Singapore",
    intro: [
      "Arrive or depart in comfort with a private chauffeur at Changi Airport. We provide meet-and-greet service and monitor your flight, so your driver is there when you land and your ride is ready when you leave.",
      "Choose the vehicle that suits your party and luggage — from the Mercedes-Benz E-Class and S-Class for executive travel to the Toyota Alphard / Vellfire, V-Class and larger vehicles for families and groups. Our service is available 24/7.",
    ],
    highlightsTitle: "What to expect",
    highlights: [
      "Meet-and-greet at Changi Airport on arrival",
      "Flight monitoring for arrivals",
      "Transfers to hotels, homes, offices and event venues across Singapore",
      "Departures: pick-up from your address in time for your flight",
      "Premium vehicles with professional chauffeurs",
    ],
    vehicleSlugs: ["toyota-alphard", "mercedes-e-class", "mercedes-v-class", "mercedes-s-class"],
    vehiclesTitle: "Vehicles for airport transfers",
    howTitle: "How to book",
    how: [
      "Message us on WhatsApp or call with your flight number, date, pick-up and drop-off address, and number of passengers and bags.",
      "We confirm your vehicle and fare.",
      "Your chauffeur meets you at the airport, or collects you at your address for a departure.",
    ],
    faqs: [
      {
        q: "Do you offer meet-and-greet at Changi Airport?",
        a: "Yes. Our airport transfers include meet-and-greet service and flight monitoring, so your chauffeur is ready when you arrive.",
      },
      {
        q: "How much is an airport transfer in Singapore?",
        a: "Airport transfer rates start from $70 for the Toyota Alphard / Vellfire, with other vehicles priced on their fleet pages. Surcharges may apply, for example a midnight surcharge (0000–0600) of $15, additional drop-off points and child seats. Contact us for an exact quote.",
      },
      {
        q: "Can I book a transfer at night or very early in the morning?",
        a: "Yes, our service is available 24/7. A midnight surcharge applies between 0000 and 0600.",
      },
    ],
    lastModified: "2026-10-28",
  },
  {
    slug: "corporate-chauffeur-singapore",
    navLabel: "Corporate Chauffeur",
    navLabelZh: "企业商务出行",
    serviceType: "Corporate chauffeur service",
    title: "Corporate Chauffeur Service Singapore | Executive Car Service",
    description:
      "Reliable executive chauffeur service in Singapore for meetings, conferences and corporate events. Corporate accounts with priority booking and monthly billing.",
    h1: "Corporate chauffeur service in Singapore",
    eyebrow: "Corporate travel · Singapore",
    intro: [
      "Reliable executive transportation for business meetings, conferences, client visits and corporate events. Our professional chauffeurs and premium vehicles make sure your guests and colleagues arrive on time and in comfort.",
      "Companies that travel with us regularly can set up a corporate account, with tailored arrangements and a dedicated point of contact.",
    ],
    highlightsTitle: "Corporate account benefits",
    highlights: [
      "Preferential rates and priority booking",
      "Dedicated account manager",
      "Consolidated monthly billing",
      "Dedicated fleet allocation",
    ],
    vehicleSlugs: ["mercedes-s-class", "mercedes-e-class", "toyota-alphard", "mercedes-v-class"],
    vehiclesTitle: "Executive vehicles",
    howTitle: "Getting started",
    how: [
      "Email or message us about your company's travel needs.",
      "We set up your corporate account and agree rates and billing.",
      "Book rides with us whenever you need and we handle the rest.",
    ],
    faqs: [
      {
        q: "Can we get a corporate account?",
        a: "Yes. Corporate accounts include preferential rates, priority booking, a dedicated account manager and consolidated monthly billing. Email hello@rsclimo.com.sg or message us on WhatsApp to get started.",
      },
      {
        q: "Which vehicles are suitable for executives and VIP guests?",
        a: "Most clients choose the Mercedes-Benz S-Class or E-Class for executive travel, and the Toyota Alphard / Vellfire or Mercedes-Benz V-Class when more space is needed.",
      },
      {
        q: "Can you handle larger corporate groups?",
        a: "Yes. We also operate a 13-seater Toyota Hi-Ace, a 20-seater mini coach and a 40-seater coach for conferences, gala dinners and group transfers.",
      },
    ],
    lastModified: "2026-10-28",
  },
  {
    slug: "wedding-chauffeur-singapore",
    navLabel: "Events & Weddings",
    navLabelZh: "活动与婚礼",
    serviceType: "Wedding and event chauffeur service",
    title: "Wedding & Event Chauffeur Singapore | Luxury Wedding Car",
    description:
      "Elegant chauffeur-driven cars for weddings, galas and special occasions in Singapore. Mercedes S-Class, Alphard / Vellfire and coaches.",
    h1: "Wedding and event chauffeur service in Singapore",
    eyebrow: "Events & weddings · Singapore",
    intro: [
      "Make your special occasion memorable with an elegant fleet and professional chauffeurs. We provide chauffeur-driven cars for weddings, galas, dinners and celebrations across Singapore.",
      "Tell us your date, timings and addresses and we will recommend the right vehicles for the couple, the wedding party and your guests.",
    ],
    highlightsTitle: "For your event",
    highlights: [
      "Executive and luxury sedans for the couple and VIP guests",
      "Spacious MPVs for the wedding party",
      "Vans and coaches for guest transport",
      "Multiple vehicles for larger events",
      "Additional drop-off points available",
    ],
    vehicleSlugs: ["mercedes-s-class", "toyota-alphard", "mercedes-v-class", "mini-coach-bus"],
    vehiclesTitle: "Vehicles for weddings and events",
    howTitle: "How to book",
    how: [
      "Send us your date, timings, addresses and number of guests.",
      "We suggest vehicles and confirm a quote.",
      "Your chauffeurs arrive ready, on schedule.",
    ],
    faqs: [
      {
        q: "Can you provide several vehicles for one event?",
        a: "Yes. We can arrange multiple vehicles, from executive sedans to MPVs, vans and coaches, depending on your event.",
      },
      {
        q: "How do I get a quote for a wedding or gala?",
        a: "Message us on WhatsApp or email hello@rsclimo.com.sg with your date, timings, addresses and the number of guests, and we will send a quote.",
      },
    ],
    lastModified: "2026-10-28",
  },
  {
    slug: "hourly-chauffeur-singapore",
    navLabel: "Hourly Chauffeur",
    navLabelZh: "按小时包车",
    serviceType: "Hourly chauffeur service",
    title: "Hourly Chauffeur Service Singapore | Car with Driver",
    description:
      "Hire a car with a professional chauffeur by the hour in Singapore for meetings, shopping, city tours and multi-stop days. Premium vehicles.",
    h1: "Hourly chauffeur service in Singapore",
    eyebrow: "Hourly disposal · Singapore",
    intro: [
      "Keep a car and chauffeur at your disposal for the time you need — for a day of meetings, shopping, sightseeing around Singapore or a schedule with several stops.",
      "Hourly rates depend on the vehicle and the duration, so contact us with your plan for a quote.",
    ],
    highlightsTitle: "Ideal for",
    highlights: [
      "Multi-stop business days and client visits",
      "City tours of Singapore's attractions",
      "Shopping and dining trips",
      "Events where you need a car on standby",
    ],
    vehicleSlugs: ["mercedes-s-class", "toyota-alphard", "mercedes-e-class", "mercedes-v-class"],
    vehiclesTitle: "Vehicles for hourly hire",
    howTitle: "How to book",
    how: [
      "Tell us your date, start time, how long you need the car and where you are going.",
      "We confirm the vehicle and rate.",
      "Your chauffeur stays with you for the booked time.",
    ],
    faqs: [
      {
        q: "How is hourly hire priced?",
        a: "Hourly disposal is quoted per booking depending on the vehicle and the length of time. Contact us with your plan for a quote.",
      },
      {
        q: "Is there a waiting fee?",
        a: "For point-to-point rides the first 10 minutes of waiting are free, then $10 per 15 minutes. For hourly bookings, ask us when you request a quote.",
      },
    ],
    lastModified: "2026-10-28",
  },
  {
    slug: "group-transport-singapore",
    navLabel: "Group Transport",
    navLabelZh: "团体运输",
    serviceType: "Minibus and coach charter",
    title: "Minibus & Coach Charter Singapore | Group Transport",
    description:
      "Minibus and coach charter with driver in Singapore for corporate outings, tours and group transfers. 13-seater Hi-Ace to 40-seater coach.",
    h1: "Group transport: minibus and coach charter in Singapore",
    eyebrow: "Group transport · Singapore",
    intro: [
      "Spacious minibuses and coaches for corporate outings, tours and large group transfers, each with a professional driver.",
      "Our group fleet includes a 13-seater Toyota Hi-Ace, a 20-seater mini coach and a 40-seater coach. Tell us your group size and schedule and we will recommend the right vehicle.",
    ],
    highlightsTitle: "Group transport options",
    highlights: [
      "13-seater Toyota Hi-Ace",
      "20-seater mini coach",
      "40-seater coach for large events and conferences",
      "Corporate outings, tours and event transfers",
    ],
    vehicleSlugs: ["toyota-hiace", "mini-coach-bus", "40-seater-bus"],
    vehiclesTitle: "Group vehicles",
    howTitle: "How to book",
    how: [
      "Send us your group size, date, schedule and route.",
      "We confirm the vehicle and a quote.",
      "Your driver collects the group on time.",
    ],
    faqs: [
      {
        q: "What group vehicles do you have?",
        a: "A 13-seater Toyota Hi-Ace, a 20-seater mini coach and a 40-seater coach.",
      },
      {
        q: "How much does a coach cost?",
        a: "The 13-seater starts from $80 and the 20-seater mini coach from $180. The 40-seater coach is quoted per booking — contact us with your plan.",
      },
    ],
    lastModified: "2026-10-28",
  },
]

export function getLandingPage(slug: string) {
  return LANDING_PAGES.find((p) => p.slug === slug) ?? null
}
