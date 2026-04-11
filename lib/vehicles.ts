export interface PricingRow {
  service: string
  rate: string
}

export interface Vehicle {
  slug: string
  name: string
  category: string
  categoryZh: string
  tagline: string
  passengers: number
  luggage: number
  startingPrice: string
  description: string
  descriptionZh: string
  features: string[]
  featuresZh: string[]
  image: string
  photo: string
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
    categoryZh: "高级MPV",
    tagline: "Up to 6 passengers · From $70",
    passengers: 6,
    luggage: 4,
    startingPrice: "From $70",
    description:
      "The Toyota Alphard is our flagship MPV — spacious, refined, and ready for any journey. Perfect for airport transfers, family outings, and group travel, the Alphard combines generous seating with a smooth, quiet ride that keeps every passenger comfortable from door to door.",
    descriptionZh:
      "丰田埃尔法是我们的旗舰MPV——宽敞、精致，适合各类出行。无论是机场接送、家庭出游还是团体旅行，埃尔法以宽敞的座位空间和平稳安静的驾乘体验，确保每位乘客从出发到抵达全程舒适如一。",
    features: ["Dual Rear Monitors", "Premium Leather Seats", "Ambient Lighting", "Sliding Door Entry"],
    featuresZh: ["双后排显示屏", "顶级皮革座椅", "氛围灯光", "电动推拉门"],
    image: "/vehicles/alphard-photo.png",
    photo: "/vehicles/alphard-photo.png",
    heroImage: "/vehicles/alphard-photo.png",
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
    categoryZh: "行政轿车",
    tagline: "Up to 3 passengers · From $170",
    passengers: 3,
    luggage: 3,
    startingPrice: "From $170",
    description:
      "The pinnacle of luxury sedans. The Mercedes-Benz S-Class delivers unmatched elegance, a whisper-quiet cabin, and cutting-edge comfort technology — the ideal choice for VIP transfers, C-suite executives, and discerning travellers who accept nothing less than the best.",
    descriptionZh:
      "豪华轿车的巅峰之作。奔驰S级提供无与伦比的优雅感受、超静音座舱及尖端舒适科技——是VIP接送、高管出行及一切追求极致体验的不二之选。",
    features: ["Massage Seats", "Burmester Sound System", "Executive Rear Package", "MBUX Rear Entertainment"],
    featuresZh: ["按摩座椅", "柏林之声音响系统", "行政后排配置", "MBUX后排娱乐系统"],
    image: "/vehicles/s-class-photo.png",
    photo: "/vehicles/s-class-photo.png",
    heroImage: "/vehicles/s-class-photo.png",
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
    categoryZh: "行政轿车",
    tagline: "Up to 3 passengers · From $70",
    passengers: 3,
    luggage: 3,
    startingPrice: "From $70",
    description:
      "Business-class refinement for daily executive transport, airport transfers, and client-facing journeys. The Mercedes-Benz E-Class blends sophisticated styling with a composed, comfortable ride — a trusted choice for corporate travel across Singapore.",
    descriptionZh:
      "商务出行的精致之选，适用于日常行政接送、机场转运及客户接待。奔驰E级兼具优雅外观与从容舒适的驾乘体验，是企业商务出行的信赖之选。",
    features: ["Premium Leather Interior", "Dual-Zone Climate Control", "USB Charging Ports", "Panoramic Sunroof"],
    featuresZh: ["顶级皮革内饰", "双区空调控制", "USB充电接口", "全景天窗"],
    image: "/vehicles/e-class-photo.png",
    photo: "/vehicles/e-class-photo.png",
    heroImage: "/vehicles/e-class-photo.png",
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
    categoryZh: "豪华MPV",
    tagline: "Up to 7 passengers · From $80",
    passengers: 7,
    luggage: 5,
    startingPrice: "From $80",
    description:
      "Spacious luxury for larger groups without compromising on Mercedes-Benz refinement. The V-Class offers conference-style captain seating, a panoramic roof, and rear climate control — perfect for corporate team transfers, family trips, and airport runs with extra luggage.",
    descriptionZh:
      "为大型团体提供宽敞奢华体验，不妥协于奔驰的精致品质。V级配备会议式商务座椅、全景天窗及后排独立空调——专为企业团队接送、家庭出游及大件行李运输而设计。",
    features: ["Captain Seats", "Panoramic Roof", "Rear Climate Zone", "Folding Tables"],
    featuresZh: ["商务Captain座椅", "全景天窗", "后排独立空调", "可折叠桌板"],
    image: "/vehicles/v-class-photo.png",
    photo: "/vehicles/v-class-photo.png",
    heroImage: "/vehicles/v-class-photo.png",
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
    categoryZh: "团体运输",
    tagline: "Up to 13 passengers · From $80",
    passengers: 13,
    luggage: 10,
    startingPrice: "From $80",
    description:
      "Ideal for corporate teams, tour groups, and medium-sized events requiring comfortable and reliable group transport. The Toyota Hiace comfortably seats 13 with ample boot space for luggage — a practical solution for transfers across Singapore and beyond.",
    descriptionZh:
      "专为企业团队、旅游团及中型活动设计，提供舒适可靠的团体运输服务。丰田海狮舒适容纳13名乘客，并配备宽敞行李空间——是新加坡境内及跨境团体出行的实用之选。",
    features: ["13 Passenger Seats", "Ample Boot Space", "Full Air Conditioning", "Reclining Seats"],
    featuresZh: ["13个乘客座位", "宽敞行李空间", "全车空调", "可调节座椅"],
    image: "/vehicles/hiace-photo.png",
    photo: "/vehicles/hiace-photo.png",
    heroImage: "/vehicles/hiace-photo.png",
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
    categoryZh: "豪华巴士",
    tagline: "Up to 40 passengers · Contact for quote",
    passengers: 40,
    luggage: 40,
    startingPrice: "Contact for quote",
    description:
      "Full-size coach for large corporate events, conferences, gala dinners, and group transfers anywhere across Singapore. Seats up to 40 passengers in comfort with reclining seats and full air conditioning — the right choice when your group is too big for a minibus.",
    descriptionZh:
      "全尺寸豪华巴士，适用于大型企业活动、峰会、颁奖晚宴及新加坡各地的团体接送。可舒适容纳40名乘客，配备可调节座椅及全车空调——是人数超出小型巴士容量时的最佳选择。",
    features: ["40 Reclining Seats", "Full Air Conditioning", "Large Luggage Bay", "PA System Available"],
    featuresZh: ["40个可调节座椅", "全车空调", "大容量行李舱", "PA广播系统（可选）"],
    image: "/vehicles/coach-photo.png",
    photo: "/vehicles/coach-photo.png",
    heroImage: "/vehicles/coach-photo.png",
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
