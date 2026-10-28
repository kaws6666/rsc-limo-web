import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
import { BUSINESS_ID } from '@/lib/seo'
import { LANDING_PAGES } from '@/lib/landing-pages'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif'
});
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: '--font-cormorant'
});

const SITE_URL = 'https://rsclimo.com.sg'
const SITE_TITLE = 'Royal Stallion Chauffeurs | Premium Limousine Service Singapore'
const SITE_DESCRIPTION = "Private chauffeur and limousine service in Singapore: Changi Airport transfers, corporate travel, weddings and hourly hire. S-Class, Alphard and coaches. 24/7."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Royal Stallion Chauffeurs',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'chauffeur service Singapore',
    'limousine service Singapore',
    'airport transfer Singapore',
    'corporate car service Singapore',
    'luxury car rental with driver Singapore',
    'Mercedes chauffeur Singapore',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: SITE_URL,
    siteName: 'Royal Stallion Chauffeurs',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Royal Stallion Chauffeurs — premium chauffeur service in Singapore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: 'Royal Stallion Chauffeurs',
      alternateName: 'RSC Limo',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: '+65-9619-4333',
      email: 'hello@rsclimo.com.sg',
      priceRange: '$$$',
      description: SITE_DESCRIPTION,
      knowsLanguage: ['en', 'zh'],
      areaServed: [
        { '@type': 'Country', name: 'Singapore' },
        { '@type': 'Airport', name: 'Singapore Changi Airport', iataCode: 'SIN' },
      ],
      address: { '@type': 'PostalAddress', addressCountry: 'SG' },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+65-9619-4333',
        email: 'hello@rsclimo.com.sg',
        contactType: 'reservations',
        areaServed: 'SG',
        availableLanguage: ['English', 'Chinese'],
      },
      sameAs: ['https://www.facebook.com/rsclimousine'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Chauffeur services in Singapore',
        itemListElement: LANDING_PAGES.map((p) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: p.h1, url: `${SITE_URL}/${p.slug}` },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Royal Stallion Chauffeurs',
      inLanguage: 'en-SG',
      publisher: { '@id': BUSINESS_ID },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-SG">
      <body className={`${playfair.variable} ${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
