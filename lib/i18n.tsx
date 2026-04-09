"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Lang = "en" | "zh"

export const translations = {
  en: {
    // Header
    nav: {
      services: "Services",
      fleet: "Our Fleet",
      about: "About",
      contact: "Contact",
      getQuote: "Get Quote",
    },

    // Hero
    hero: {
      badge: "Singapore's Premier Chauffeur Service",
      title1: "Luxury Travel,",
      title2: "Redefined",
      subtitle:
        "Experience unparalleled elegance with our premium fleet of luxury vehicles. From executive sedans to spacious coaches, we deliver exceptional service for every journey.",
      bookBtn: "Book Your Ride",
    },

    // Services
    services: {
      badge: "Our Services",
      title: "Excellence in Every Journey",
      subtitle:
        "From individual travelers to corporate clients, we provide comprehensive transportation solutions tailored to your needs.",
      items: [
        {
          title: "Airport Transfers",
          description:
            "Seamless arrivals and departures at Changi Airport with meet-and-greet service and flight monitoring.",
        },
        {
          title: "Corporate Travel",
          description:
            "Reliable executive transportation for business meetings, conferences, and corporate events.",
        },
        {
          title: "Events & Weddings",
          description:
            "Make your special occasions memorable with our elegant fleet and professional chauffeurs.",
        },
        {
          title: "Group Transport",
          description:
            "Spacious minibuses and coaches for corporate outings, tours, and large group transfers.",
        },
        {
          title: "B2B Solutions",
          description:
            "Tailored corporate accounts with dedicated fleet allocation and preferential rates.",
        },
        {
          title: "City Tours",
          description:
            "Discover Singapore's attractions in comfort with our knowledgeable chauffeur guides.",
        },
      ],
    },

    // Fleet
    fleet: {
      badge: "Our Fleet",
      title: "A Vehicle for Every Occasion",
      subtitle:
        "From intimate executive sedans to spacious coaches, our meticulously maintained fleet ensures the perfect ride for any requirement.",
      filterAll: "All Vehicles",
      filterExecutive: "Executive Sedans",
      filterMpv: "Luxury MPVs",
      filterGroup: "Group Transport",
      viewDetails: "View Details",
    },

    // About
    about: {
      badge: "About Royal Stallion Chauffeurs",
      title1: "Singapore's Trusted",
      title2: "Chauffeur Partner",
      para1:
        "Royal Stallion Chauffeurs is Singapore's premier luxury ground transportation service. Our commitment to excellence, punctuality, and discretion has earned us the trust of corporate clients, government agencies, and discerning individuals across the island.",
      para2:
        "Every journey with us is crafted with meticulous attention to detail. Our professionally trained chauffeurs, immaculately maintained vehicles, and round-the-clock availability ensure you arrive in style — whether it's an airport transfer at dawn or a gala event in the evening.",
      stats: [
        { value: "24/7", label: "Service Availability" },
        { value: "500+", label: "Corporate Clients" },
        { value: "10+", label: "Years Experience" },
        { value: "100%", label: "Safety Record" },
      ],
      yearsOverlay: "Years of Excellence",
    },

    // Testimonials
    testimonials: {
      badge: "Testimonials",
      title: "What Our Clients Say",
      subtitle: "Trusted by leading corporations and discerning individuals across Singapore.",
    },

    // Contact
    contact: {
      badge: "Get In Touch",
      title: "Ready to Experience Luxury?",
      subtitle:
        "Contact us for a personalised quote or to learn more about our corporate and individual transportation solutions.",
      formTitle: "Request a Quote",
      labelName: "Full Name",
      placeholderName: "John Doe",
      labelEmail: "Email",
      placeholderEmail: "john@company.com",
      labelPhone: "Phone Number",
      placeholderPhone: "+65 9123 4567",
      labelService: "Service Type",
      selectService: "Select a service",
      serviceAirport: "Airport Transfer",
      serviceCorporate: "Corporate Travel",
      serviceEvents: "Events & Weddings",
      serviceGroup: "Group Transport",
      serviceTour: "City Tours",
      serviceOther: "Other",
      labelMessage: "Message",
      placeholderMessage: "Tell us about your transportation needs...",
      sendBtn: "Send Inquiry",
      sendingBtn: "Sending...",
      thankYou: "Thank you!",
      thankYouSub: "We'll be in touch shortly.",
      errorMsg: "Something went wrong. Please email us directly.",
      callUs: "Call Us",
      emailUs: "Email Us",
      hours: "Operating Hours",
      hoursValue: "24/7, 365 Days",
      whatsapp: "WhatsApp",
      whatsappValue: "Chat with us",
      corporateTitle: "Corporate Account Benefits",
      corporateBullets: [
        "Preferential rates and priority booking",
        "Dedicated account manager",
        "Consolidated monthly billing",
        "Custom fleet allocation",
      ],
      corporateBtn: "Inquire About Corporate Rates",
    },

    // Footer
    footer: {
      tagline:
        "Singapore's premier chauffeur service — delivering luxury transportation experiences for corporate clients and discerning individuals.",
      servicesTitle: "Services",
      fleetTitle: "Our Fleet",
      companyTitle: "Company",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },

    // Vehicle page
    vehicle: {
      backToFleet: "Back to Fleet",
      passengers: "passengers",
      luggage: "luggage pieces",
      upTo: "Up to",
      aboutTitle: "About This Vehicle",
      bookWhatsapp: "Book via WhatsApp",
      pricingTitle: "Pricing & Rates",
      pricingSubtitle: "All prices are inclusive of a professional chauffeur and 24/7 availability.",
      pricingHeaderService: "Service",
      pricingHeaderRate: "Rate",
      surchargesTitle: "Surcharges & Additional Fees",
      surcharges: [
        "Midnight Surcharge (0000–0600): +$15",
        "Baby Seat(s): +$10",
        "Waiting Fee: First 10 mins free, subsequent $10 per 15 mins",
      ],
      serviceNames: {
        "Point-to-Point Transfer": "Point-to-Point Transfer",
        "Airport Transfer (Changi)": "Airport Transfer (Changi)",
        "Hourly Disposal": "Hourly Disposal",
        "All other services": "All other services",
        "On Request": "On Request",
        "Contact us": "Contact us",
        "From $70": "From $70",
        "From $80": "From $80",
        "From $170": "From $170",
      } as Record<string, string>,
      tcTitle: "Terms & Conditions",
      ctaTitle: "Ready to Book the",
      ctaSubtitle:
        "Our team is available 24/7 — WhatsApp us to check availability and confirm your booking.",
      requestQuote: "Request a Quote",
      imageDisclaimer: "Images are for reference purposes only",
      tc: [
        "All prices are subject to prevailing GST",
        "Advance booking of 24+ hours is recommended",
        "Cancellations must be made at least 24 hours before pickup",
        "No-shows and late cancellations will be charged in full",
        "Smoking is strictly prohibited in all vehicles",
        "Pets are not permitted without prior arrangement",
        "Child safety seats are available upon request",
        "Quoted rates apply for standard transfers within Singapore",
        "Cross-border and Malaysia/Batam rates are quoted separately",
        "RSC reserves the right to substitute with a vehicle of equal or higher class",
      ],
    },
  },

  zh: {
    // Header
    nav: {
      services: "服务项目",
      fleet: "我们的车队",
      about: "关于我们",
      contact: "联系我们",
      getQuote: "立即询价",
    },

    // Hero
    hero: {
      badge: "新加坡顶级豪华专车服务",
      title1: "奢华出行，",
      title2: "重新定义",
      subtitle:
        "体验无与伦比的典雅，尽享我们的豪华车队服务。从行政轿车到宽敞巴士，我们为每一段旅程提供卓越体验。",
      bookBtn: "立即预约",
    },

    // Services
    services: {
      badge: "我们的服务",
      title: "每一段旅程，皆是卓越体验",
      subtitle: "无论是个人出行还是企业客户，我们提供全面的专车服务，满足您的一切需求。",
      items: [
        {
          title: "机场接送",
          description: "无缝对接樟宜机场，提供航班追踪及迎接牌服务，确保准时抵达。",
        },
        {
          title: "企业商务出行",
          description: "为商务会议、企业峰会及活动提供可靠的行政专车服务。",
        },
        {
          title: "活动与婚礼",
          description: "以我们优雅的车队与专业司机，为您的特别时刻留下难忘印记。",
        },
        {
          title: "团体运输",
          description: "提供宽敞的小型巴士及豪华巴士，满足企业团队、旅游团及大型团体的出行需求。",
        },
        {
          title: "企业对企业解决方案",
          description: "量身定制企业账户，享有专属车队配置及优惠价格。",
        },
        {
          title: "城市观光",
          description: "由专业司机带领，舒适探索新加坡各大景点，享受个性化城市游览体验。",
        },
      ],
    },

    // Fleet
    fleet: {
      badge: "我们的车队",
      title: "每种场合，皆有专车",
      subtitle: "从私密行政轿车到宽敞巴士，我们精心维护的车队确保为您的每一项需求提供完美座驾。",
      filterAll: "全部车辆",
      filterExecutive: "行政轿车",
      filterMpv: "豪华MPV",
      filterGroup: "团体运输",
      viewDetails: "查看详情",
    },

    // About
    about: {
      badge: "关于皇家骏马专车",
      title1: "新加坡值得信赖的",
      title2: "专车服务伙伴",
      para1:
        "皇家骏马专车是新加坡顶级豪华地面运输服务商。我们对卓越品质、守时与保密的承诺，赢得了众多企业客户、政府机构及尊贵人士的信赖。",
      para2:
        "每一段由我们承担的旅程，都经过精心策划与细心安排。我们专业训练的司机、一尘不染的豪华车辆，以及全天候的服务保障，确保您无论是清晨的机场接送还是夜间的盛宴活动，都能以最优雅的姿态抵达。",
      stats: [
        { value: "24/7", label: "全天候服务" },
        { value: "500+", label: "企业客户" },
        { value: "10+", label: "年行业经验" },
        { value: "100%", label: "安全记录" },
      ],
      yearsOverlay: "年卓越服务",
    },

    // Testimonials
    testimonials: {
      badge: "客户评价",
      title: "客户心声",
      subtitle: "深受新加坡各大企业及尊贵人士的信赖与好评。",
    },

    // Contact
    contact: {
      badge: "联系我们",
      title: "准备好体验奢华了吗？",
      subtitle: "欢迎联系我们获取个性化报价，或了解更多企业及个人专车服务详情。",
      formTitle: "申请报价",
      labelName: "姓名",
      placeholderName: "张三",
      labelEmail: "电子邮件",
      placeholderEmail: "zhang@company.com",
      labelPhone: "电话号码",
      placeholderPhone: "+65 9123 4567",
      labelService: "服务类型",
      selectService: "请选择服务",
      serviceAirport: "机场接送",
      serviceCorporate: "企业商务出行",
      serviceEvents: "活动与婚礼",
      serviceGroup: "团体运输",
      serviceTour: "城市观光",
      serviceOther: "其他",
      labelMessage: "留言",
      placeholderMessage: "请告诉我们您的出行需求……",
      sendBtn: "发送查询",
      sendingBtn: "发送中……",
      thankYou: "感谢您的查询！",
      thankYouSub: "我们将尽快与您联系。",
      errorMsg: "提交失败，请直接发送电子邮件给我们。",
      callUs: "致电我们",
      emailUs: "电子邮件",
      hours: "营业时间",
      hoursValue: "全年365天，全天24小时",
      whatsapp: "WhatsApp",
      whatsappValue: "即时联系我们",
      corporateTitle: "企业账户专属优惠",
      corporateBullets: [
        "优惠价格及优先预订",
        "专属客户经理",
        "每月统一账单",
        "专属车队配置",
      ],
      corporateBtn: "咨询企业优惠",
    },

    // Footer
    footer: {
      tagline: "新加坡顶级豪华专车服务——为企业客户及尊贵人士提供卓越的出行体验。",
      servicesTitle: "服务项目",
      fleetTitle: "我们的车队",
      companyTitle: "公司",
      privacy: "隐私政策",
      terms: "服务条款",
    },

    // Vehicle page
    vehicle: {
      backToFleet: "返回车队",
      passengers: "名乘客",
      luggage: "件行李",
      upTo: "最多",
      aboutTitle: "关于此车辆",
      bookWhatsapp: "通过WhatsApp预订",
      pricingTitle: "价格与收费",
      pricingSubtitle: "所有价格均包含专业司机服务及全天候接待。",
      pricingHeaderService: "服务项目",
      pricingHeaderRate: "收费",
      surchargesTitle: "附加费及额外收费",
      surcharges: [
        "深夜附加费（0000–0600）：+$15",
        "儿童安全座椅：+$10",
        "等候费：首10分钟免费，之后每15分钟收取$10",
      ],
      serviceNames: {
        "Point-to-Point Transfer": "点到点接送",
        "Airport Transfer (Changi)": "樟宜机场接送",
        "Hourly Disposal": "按小时包车",
        "All other services": "其他服务",
        "On Request": "按需报价",
        "Contact us": "联系我们",
        "From $70": "从$70起",
        "From $80": "从$80起",
        "From $170": "从$170起",
      } as Record<string, string>,
      tcTitle: "条款与条件",
      ctaTitle: "立即预订",
      ctaSubtitle: "我们的团队全天候待命——通过WhatsApp与我们联系以确认预订。",
      requestQuote: "申请报价",
      imageDisclaimer: "图片仅供参考",
      tc: [
        "所有价格须缴纳现行消费税（GST）",
        "建议提前24小时以上预订",
        "取消预订须于接载时间前至少24小时提出",
        "缺席及临时取消将照常收取全额费用",
        "所有车辆内严禁吸烟",
        "如需携带宠物，请提前告知",
        "如需儿童安全座椅，请提前要求",
        "报价适用于新加坡境内的标准接送服务",
        "跨境及马来西亚/峇淡岛的费用另行报价",
        "RSC保留以同等或更高级别车辆替换的权利",
      ],
    },
  },
}

type Translations = typeof translations.en

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    const saved = localStorage.getItem("rsc-lang") as Lang | null
    if (saved === "en" || saved === "zh") setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("rsc-lang", l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LangContext)
}
