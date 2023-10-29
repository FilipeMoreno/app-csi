'use client'

import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { useState } from 'react'
import Footer from '@/components/footer'

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
    <body>
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <div className="md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar
                className={`lg:block ${showSidebar ? 'block' : 'hidden'}`}
              />
              <div
                className={`col-span-3 lg:col-span-4 lg:border-l ${
                  showSidebar ? 'hidden' : 'block'
                }`}
              >
                <div className="h-full px-4 py-6 lg:px-8">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </body>
  )
}
