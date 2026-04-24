export type PricingRow = {
  service: string
  rate: string
}

export type Vehicle = {
  slug: string
  name: string
  nameZh?: string
  category: string
  categoryZh?: string
  passengers: number
  luggage: number
  startingPrice: string
  description: string
  descriptionZh?: string
  features: string[]
  featuresZh?: string[]
  pricing: PricingRow[]
}

export const VEHICLES: Vehicle[] = [
  {
    slug: "toyota-alphard",
    name: "Toyota Alphard / Vellfire",
    nameZh: "丰田埃尔法 / 威尔法",
    category: "PREMIUM MPV",
    categoryZh: "高级MPV",
    passengers: 5,
    luggage: 2,
    startingPrice: "From $70",
    description:
      "The Toyota Alphard / Vellfire is our flagship MPV — spacious, refined, and ready for any journey. Perfect for airport transfers, family outings, and group travel, it combines generous seating with a smooth, quiet ride that keeps every passenger comfortable from door to door.",
    descriptionZh:
      "丰田埃尔法/威尔法是我们的旗舰MPV——宽敞、精致，适合各类出行。无论是机场接送、家庭出游还是团体旅行，以宽敞的座位空间和平稳安静的驾乘体验，确保每位乘客从出发到抵达全程舒适如一。",
    features: ["Premium Leather Seats", "Ambient Lighting", "Sliding Door Entry", "Spacious Cabin"],
    featuresZh: ["顶级皮革座椅", "氛围灯光", "电动推拉门", "宽敞座舱"],
    pricing: [
      { service: "Point-to-Point Transfer",    rate: "From $70"    },
      { service: "Airport Transfer (Changi)",   rate: "From $70"    },
      { service: "Hourly Disposal",             rate: "Contact us"  },
      { service: "All other services",          rate: "Contact us"  },
    ],
  },
  {
    slug: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    nameZh: "奔驰S级",
    category: "EXECUTIVE SEDAN",
    categoryZh: "行政轿车",
    passengers: 2,
    luggage: 3,
    startingPrice: "From $170",
    description:
      "The pinnacle of luxury sedans. The Mercedes-Benz S-Class delivers unmatched elegance, a whisper-quiet cabin, and cutting-edge comfort technology — the ideal choice for VIP transfers, C-suite executives, and discerning travellers who accept nothing less than the best.",
    descriptionZh:
      "豪华轿车的巅峰之作。奔驰S级提供无与伦比的优雅感受、超静音座舱及尖端舒适科技——是VIP接送、高管出行及一切追求极致体验的不二之选。",
    features: ["Massage Seats", "Burmester Sound System", "Executive Rear Package", "MBUX Rear Entertainment"],
    featuresZh: ["按摩座椅", "柏林之声音响系统", "行政后排配置", "MBUX后排娱乐系统"],
    pricing: [
      { service: "Point-to-Point Transfer",    rate: "From $170"   },
      { service: "Airport Transfer (Changi)",   rate: "From $170"   },
      { service: "Hourly Disposal",             rate: "Contact us"  },
      { service: "All other services",          rate: "Contact us"  },
    ],
  },
  {
    slug: "mercedes-e-class",
    name: "Mercedes-Benz E-Class",
    nameZh: "奔驰E级",
    category: "EXECUTIVE SEDAN",
    categoryZh: "行政轿车",
    passengers: 2,
    luggage: 3,
    startingPrice: "From $70",
    description:
      "Business-class refinement for daily executive transport, airport transfers, and client-facing journeys. The Mercedes-Benz E-Class blends sophisticated styling with a composed, comfortable ride — a trusted choice for corporate travel across Singapore.",
    descriptionZh:
      "商务出行的精致之选，适用于日常行政接送、机场转运及客户接待。奔驰E级兼具优雅外观与从容舒适的驾乘体验，是企业商务出行的信赖之选。",
    features: ["Premium Leather Interior", "Dual-Zone Climate Control", "USB Charging Ports", "Panoramic Sunroof"],
    featuresZh: ["顶级皮革内饰", "双区空调控制", "USB充电接口", "全景天窗"],
    pricing: [
      { service: "Point-to-Point Transfer",    rate: "From $70"    },
      { service: "Airport Transfer (Changi)",   rate: "From $70"    },
      { service: "Hourly Disposal",             rate: "Contact us"  },
      { service: "All other services",          rate: "Contact us"  },
    ],
  },
  {
    slug: "mercedes-v-class",
    name: "Mercedes-Benz V-Class",
    nameZh: "奔驰V级",
    category: "LUXURY MPV",
    categoryZh: "豪华MPV",
    passengers: 7,
    luggage: 5,
    startingPrice: "From $80",
    description:
      "Spacious luxury for larger groups without compromising on Mercedes-Benz refinement. The V-Class offers conference-style captain seating, a panoramic roof, and rear climate control — perfect for corporate team transfers, family trips, and airport runs with extra luggage.",
    descriptionZh:
      "为大型团体提供宽敞奢华体验，不妥协于奔驰的精致品质。V级配备会议式商务座椅、全景天窗及后排独立空调——专为企业团队接送、家庭出游及大件行李运输而设计。",
    features: ["Captain Seats", "Panoramic Roof", "Rear Climate Zone", "Folding Tables"],
    featuresZh: ["商务Captain座椅", "全景天窗", "后排独立空调", "可折叠桌板"],
    pricing: [
      { service: "Point-to-Point Transfer",    rate: "From $80"    },
      { service: "Airport Transfer (Changi)",   rate: "From $80"    },
      { service: "Hourly Disposal",             rate: "Contact us"  },
      { service: "All other services",          rate: "Contact us"  },
    ],
  },
  {
    slug: "toyota-hiace",
    name: "13 Seater Toyota Hi-Ace",
    nameZh: "丰田海狮（13座）",
    category: "GROUP TRANSPORT",
    categoryZh: "团体运输",
    passengers: 13,
    luggage: 10,
    startingPrice: "From $80",
    description:
      "Ideal for corporate teams, tour groups, and medium-sized events requiring comfortable and reliable group transport. The Toyota Hi-Ace comfortably seats 13 with ample boot space for luggage — a practical solution for transfers across Singapore and beyond.",
    descriptionZh:
      "专为企业团队、旅游团及中型活动设计，提供舒适可靠的团体运输服务。丰田海狮舒适容纳13名乘客，并配备宽敞行李空间——是新加坡境内及跨境团体出行的实用之选。",
    features: ["13 Passenger Seats", "Ample Boot Space", "Full Air Conditioning", "Reclining Seats"],
    featuresZh: ["13个乘客座位", "宽敞行李空间", "全车空调", "可调节座椅"],
    pricing: [
      { service: "Point-to-Point Transfer",    rate: "From $80"    },
      { service: "Airport Transfer (Changi)",   rate: "From $80"    },
      { service: "Hourly Disposal",             rate: "Contact us"  },
      { service: "All other services",          rate: "Contact us"  },
    ],
  },
  {
    slug: "mini-coach-bus",
    name: "20 Seater Mini Coach Bus",
    nameZh: "20座迷你巴士",
    category: "GROUP TRANSPORT",
    categoryZh: "团体运输",
    passengers: 20,
    luggage: 10,
    startingPrice: "From $180",
    description:
      "Ideal for corporate events, airport group transfers, and private outings. The 20-seater Mini Coach Bus combines spacious seating with ample luggage storage, delivering a comfortable and professional group travel experience.",
    descriptionZh:
      "专为企业活动、机场团体接送及私人出行设计。20座迷你巴士将宽敞座位与充裕行李空间完美结合，提供舒适专业的团体出行体验。",
    features: ["20 Passenger Seats", "Air-Conditioning", "Luggage Compartment", "Professional Chauffeur", "Corporate & Event Transfers"],
    featuresZh: ["20个乘客座位", "全车空调", "行李舱", "专业司机", "企业及活动接送"],
    pricing: [
      { service: "Point-to-Point Transfer",    rate: "From $180"   },
      { service: "Airport Transfer (Changi)",   rate: "From $180"   },
      { service: "Hourly Disposal",             rate: "Contact us"  },
      { service: "All other services",          rate: "Contact us"  },
    ],
  },
  {
    slug: "40-seater-bus",
    name: "40-Seater Coach",
    nameZh: "40座豪华巴士",
    category: "COACH",
    categoryZh: "豪华巴士",
    passengers: 40,
    luggage: 40,
    startingPrice: "Contact for quote",
    description:
      "Full-size coach for large corporate events, conferences, gala dinners, and group transfers anywhere across Singapore. Seats up to 40 passengers in comfort with reclining seats and full air conditioning — the right choice when your group is too big for a minibus.",
    descriptionZh:
      "全尺寸豪华巴士，适用于大型企业活动、峰会、颁奖晚宴及新加坡各地的团体接送。可舒适容纳40名乘客，配备可调节座椅及全车空调——是人数超出小型巴士容量时的最佳选择。",
    features: ["40 Reclining Seats", "Full Air Conditioning", "Large Luggage Bay", "PA System Available"],
    featuresZh: ["40个可调节座椅", "全车空调", "大容量行李舱", "PA广播系统（可选）"],
    pricing: [
      { service: "Point-to-Point Transfer",    rate: "On Request"  },
      { service: "Airport Transfer (Changi)",   rate: "On Request"  },
      { service: "Hourly Disposal",             rate: "Contact us"  },
      { service: "All other services",          rate: "Contact us"  },
    ],
  },
]
