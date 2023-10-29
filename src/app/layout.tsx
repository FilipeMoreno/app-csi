'use client'

import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { useState } from 'react'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <html lang="en" className={`dark font-sans antialiased ${inter.variable}`}>
      {children}
    </html>
  )
}
