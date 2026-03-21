import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Magnolia Home Buyers | We Buy Houses Fast for Cash',
  description:
    'Get a fair cash offer in 24 hours. Sell your home as-is, any condition, anywhere in the USA. No fees, no repairs, close in as few as 7 days.',
  keywords:
    'cash home buyers, sell house fast, we buy houses, cash offer, sell as-is, no repairs, any condition',
  openGraph: {
    title: 'Magnolia Home Buyers | Cash Offers in 24 Hours',
    description:
      'Sell your home fast for cash. No repairs, no fees, any condition, nationwide.',
    type: 'website',
    url: 'https://magnoliahomebuyers.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
