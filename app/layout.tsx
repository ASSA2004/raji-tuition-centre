import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { JsonLd } from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tuition Centre in Tuticorin | Raji Tuition Centre',
  description: 'Raji Tuition Centre is a tuition centre in Tuticorin offering personalised tuition classes from LKG to 12th Standard with individual attention, regular tests and concept-based learning.',
  keywords: [
    'Tuition Centre in Tuticorin',
    'Tuition Centre in Thoothukudi',
    'Tuition Classes in Tuticorin',
    'Tuition Classes in Thoothukudi',
    'School Tuition in Tuticorin',
    'Tuition for LKG to 12th Standard',
    'Best Tuition Centre in Tuticorin',
    'Maths Tuition in Tuticorin',
    'Science Tuition in Tuticorin',
    '10th Standard Tuition in Tuticorin',
    '12th Standard Tuition in Tuticorin'
  ],
  authors: [{ name: 'Raji Tuition Centre' }],
  creator: 'Raji Tuition Centre',
  publisher: 'Raji Tuition Centre',
  metadataBase: new URL('https://rajituitioncentre.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tuition Centre in Tuticorin | Raji Tuition Centre',
    description: 'Personalised tuition classes from LKG to 12th Standard with individual attention, regular tests and concept-based learning in Tuticorin / Thoothukudi.',
    url: 'https://rajituitioncentre.com',
    siteName: 'Raji Tuition Centre',
    images: [
      {
        url: '/raji-students.png',
        width: 1024,
        height: 1024,
        alt: 'Raji Tuition Centre students attending tuition classes in Tuticorin',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuition Centre in Tuticorin | Raji Tuition Centre',
    description: 'Personalised tuition classes from LKG to 12th Standard in Tuticorin. Strong Concepts. Bright Future.',
    images: ['/raji-students.png'],
  },
  icons: {
    icon: '/RTC Logo.png',
    apple: '/RTC Logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#051D46',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased font-sans bg-[#FDFBF7] text-slate-800">
        {children}
      </body>
    </html>
  )
}
