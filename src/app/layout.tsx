import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/header'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Wi-Fi Vouchers - CSI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark font-sans antialiased ${inter.variable}`}>
      <body>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="mx-auto max-w-6xl p-6">{children}</main>
          <Toaster />
          <footer className="fixed bottom-0 left-0 right-0 border-t p-4 text-center text-primary">
            <div className="flex flex-col text-xs">
              <p>Development by Filipe Moreno</p>
              <p>v1.0.0 - Colégio Santo Inácio</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
