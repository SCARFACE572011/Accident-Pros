import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileCTA from '@/components/layout/MobileCTA'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://accidentpros.com'),
  title: {
    default: 'Accident Pros | Personal Injury Lawyers in CA, TX & NC',
    template: '%s | Accident Pros',
  },
  description:
    'Personal injury attorneys serving California, Texas, and North Carolina. Car accidents, truck accidents, slip and fall, wrongful death, and more. Free consultation. No fees unless we win.',
  keywords: [
    'personal injury lawyer',
    'accident attorney',
    'car accident lawyer',
    'no fees unless we win',
    'California personal injury',
    'Texas personal injury',
    'North Carolina personal injury',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Accident Pros',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <Analytics />
      </body>
    </html>
  )
}
