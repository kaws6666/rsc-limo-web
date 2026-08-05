import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n'
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
const SITE_DESCRIPTION = "Singapore's premier chauffeur and limousine service. Luxury fleet including Mercedes S-Class, E-Class, V-Class, Toyota Alphard/Vellfire, and coach services for corporate, airport transfers, and events."

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
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Royal Stallion Chauffeurs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/logo.png'],
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
  '@type': 'LocalBusiness',
  name: 'Royal Stallion Chauffeurs',
  alternateName: 'RSC Limo',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: '+65-8686-0775',
  priceRange: '$$$',
  areaServed: {
    '@type': 'Country',
    name: 'Singapore',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SG',
  },
  sameAs: ['https://www.facebook.com/rsclimousine'],
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
