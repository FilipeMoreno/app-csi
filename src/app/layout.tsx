import { Inter } from 'next/font/google'
import '@/styles/globals.css'

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
  return (
    <html lang="en" className={`dark font-sans antialiased ${inter.variable}`}>
      {children}
    </html>
  )
}
