export interface PricingRow {
  service: string
  rate: string
}

export interface Vehicle {
  slug: string
  name: string
  category: string
  tagline: string
  passengers: number
  luggage: number
  startingPrice: string
  description: string
  features: string[]
  image: string
  heroImage: string
  pricing: PricingRow[]
  surcharges: string[]
}

const surcharges = [
  "Midnight Surcharge (0000–0600): +$15",
  "Baby Seat(s): +$10",
  "Waiting Fee: First 10 mins free, subsequent $10 per 15 mins",
]

export const vehicles: Vehicle[] = [
  {
    slug: "toyota-alphard",
    name: "Toyota Alphard AG40",
    category: "PREMIUM MPV",
    tagline: "Up to 6 passengers · From $70",
    passengers: 6,
    luggage: 4,
    startingPrice: "From $70",
    description:
      "The Toyota Alphard is our flagship MPV — spacious, refined, and ready for any journey. Perfect for airport transfers, family outings, and group travel, the Alphard combines generous seating with a smooth, quiet ride that keeps every passenger comfortable from door to door.",
    features: ["Dual Rear Monitors", "Premium Leather Seats", "Ambient Lighting", "Sliding Door Entry"],
    image: "/vehicles/alphard.png",
    heroImage:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2940&auto=format&fit=crop",
    pricing: [
      { service: "Point-to-Point Transfer", rate: "From $70" },
      { service: "Airport Transfer (Changi)", rate: "From $70" },
      { service: "Hourly Disposal", rate: "Contact us" },
      { service: "All other services", rate: "Contact us" },
    ],
    surcharges,
  },
  {
    slug: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    category: "EXECUTIVE SEDAN",
    tagline: "Up to 3 passengers · From $170",
    passengers: 3,
    luggage: 3,
    startingPrice: "From $170",
    description:
      "The pinnacle of luxury sedans. The Mercedes-Benz S-Class delivers unmatched elegance, a whisper-quiet cabin, and cutting-edge comfort technology — the ideal choice for VIP transfers, C-suite executives, and discerning travellers who accept nothing less than the best.",
    features: ["Massage Seats", "Burmester Sound System", "Executive Rear Package", "MBUX Rear Entertainment"],
    image: "/vehicles/s-class.png",
    heroImage:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2940&auto=format&fit=crop",
    pricing: [
      { service: "Point-to-Point Transfer", rate: "From $170" },
      { service: "Airport Transfer (Changi)", rate: "From $170" },
      { service: "Hourly Disposal", rate: "Contact us" },
      { service: "All other services", rate: "Contact us" },
    ],
    surcharges,
  },
  {
    slug: "mercedes-e-class",
    name: "Mercedes-Benz E-Class",
    category: "EXECUTIVE SEDAN",
    tagline: "Up to 3 passengers · From $70",
    passengers: 3,
    luggage: 3,
    startingPrice: "From $70",
    description:
      "Business-class refinement for daily executive transport, airport transfers, and client-facing journeys. The Mercedes-Benz E-Class blends sophisticated styling with a composed, comfortable ride — a trusted choice for corporate travel across Singapore.",
    features: ["Premium Leather Interior", "Dual-Zone Climate Control", "USB Charging Ports", "Panoramic Sunroof"],
    image: "/vehicles/e-class.png",
    heroImage:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2940&auto=format&fit=crop",
    pricing: [
      { service: "Point-to-Point Transfer", rate: "From $70" },
      { service: "Airport Transfer (Changi)", rate: "From $70" },
      { service: "Hourly Disposal", rate: "Contact us" },
      { service: "All other services", rate: "Contact us" },
    ],
    surcharges,
  },
  {
    slug: "mercedes-v-class",
    name: "Mercedes-Benz V-Class",
    category: "LUXURY MPV",
    tagline: "Up to 7 passengers · From $80",
    passengers: 7,
    luggage: 5,
    startingPrice: "From $80",
    description:
      "Spacious luxury for larger groups without compromising on Mercedes-Benz refinement. The V-Class offers conference-style captain seating, a panoramic roof, and rear climate control — perfect for corporate team transfers, family trips, and airport runs with extra luggage.",
    features: ["Captain Seats", "Panoramic Roof", "Rear Climate Zone", "Folding Tables"],
    image: "/vehicles/v-class.png",
    heroImage:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=2940&auto=format&fit=crop",
    pricing: [
      { service: "Point-to-Point Transfer", rate: "From $80" },
      { service: "Airport Transfer (Changi)", rate: "From $80" },
      { service: "Hourly Disposal", rate: "Contact us" },
      { service: "All other services", rate: "Contact us" },
    ],
    surcharges,
  },
  {
    slug: "toyota-hiace",
    name: "13-Seater Toyota Hiace",
    category: "GROUP TRANSPORT",
    tagline: "Up to 13 passengers · From $80",
    passengers: 13,
    luggage: 10,
    startingPrice: "From $80",
    description:
      "Ideal for corporate teams, tour groups, and medium-sized events requiring comfortable and reliable group transport. The Toyota Hiace comfortably seats 13 with ample boot space for luggage — a practical solution for transfers across Singapore and beyond.",
    features: ["13 Passenger Seats", "Ample Boot Space", "Full Air Conditioning", "Reclining Seats"],
    image: "/vehicles/hiace.png",
    heroImage:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2940&auto=format&fit=crop",
    pricing: [
      { service: "Point-to-Point Transfer", rate: "From $80" },
      { service: "Airport Transfer (Changi)", rate: "From $80" },
      { service: "Hourly Disposal", rate: "Contact us" },
      { service: "All other services", rate: "Contact us" },
    ],
    surcharges,
  },
  {
    slug: "40-seater-bus",
    name: "40-Seater Coach",
    category: "COACH",
    tagline: "Up to 40 passengers · Contact for quote",
    passengers: 40,
    luggage: 40,
    startingPrice: "Contact for quote",
    description:
      "Full-size coach for large corporate events, conferences, gala dinners, and group transfers anywhere across Singapore. Seats up to 40 passengers in comfort with reclining seats and full air conditioning — the right choice when your group is too big for a minibus.",
    features: ["40 Reclining Seats", "Full Air Conditioning", "Large Luggage Bay", "PA System Available"],
    image: "/vehicles/bus.png",
    heroImage:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2940&auto=format&fit=crop",
    pricing: [
      { service: "Point-to-Point Transfer", rate: "On Request" },
      { service: "Airport Transfer (Changi)", rate: "On Request" },
      { service: "Hourly Disposal", rate: "Contact us" },
      { service: "All other services", rate: "Contact us" },
    ],
    surcharges,
  },
]

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug)
}
