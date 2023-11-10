import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import Script from 'next/script'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'APP - CSI',
  description: 'Aplicativo do Colégio Santo Inácio',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark font-sans antialiased ${inter.variable}
  `}
    >
      <Script src="/register-sw.ts" />

      {children}
    </html>
  )
}
