'use client'

import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { useState } from 'react'
import Footer from '@/components/footer'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const sidebarNavItems = [
    {
      title: '',
      icon: '',
      subitems: [
        {
          href: '/',
          title: 'Home',
          icon: '',
        },
      ],
    },
    {
      title: 'Carteirinhas',
      icon: '',
      subitems: [
        {
          href: '/carteirinhas/solicitacoes',
          title: 'Solicitações',
          icon: '',
        },
        {
          href: '/carteirinhas/configuracoes',
          title: 'Configurações',
          icon: '',
        },
      ],
    },
    {
      title: 'Wi-Fi',
      icon: '',
      subitems: [
        {
          href: '/wifi',
          title: 'Vouchers',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>',
        },
      ],
    },
  ]

  return (
    <body>
      <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      <div className="md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar
                className={`lg:block ${showSidebar ? 'block' : 'hidden'}`}
                items={sidebarNavItems}
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
