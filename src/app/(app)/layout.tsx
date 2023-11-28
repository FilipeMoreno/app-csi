'use client'

import '@/styles/globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { useState } from 'react'
import Footer from '@/components/footer'
import NextTopLoader from 'nextjs-toploader'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSidebar, setShowSidebar] = useState(false)

  const sidebarNavItems = [
    {
      title: 'Dashboard',
      icon: '',
      subitems: [
        {
          href: '/',
          title: 'Início',
          icon: 'home',
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
          role: ['carteirinhas.solicitacoes', 'admin'],
          icon: '',
        },
        {
          href: '/carteirinhas/scanner',
          title: 'Scanner',
          role: ['carteirinhas.scanner', 'admin'],
          icon: '',
        },
        {
          href: '/carteirinhas/configuracoes',
          title: 'Configurações',
          role: ['carteirinhas.configuracoes', 'admin'],
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
          role: ['wifi.voucher', 'admin'],
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>',
        },
      ],
    },
    {
      title: 'Sinal',
      icon: '',
      subitems: [
        {
          href: '/sinaleiro',
          title: 'Sinal',
          role: ['sinal', 'admin'],
          icon: '',
        },
      ],
    },
  ]

  const handleItemClick = () => {
    setShowSidebar(false)
  }

  return (
    <body>
      <NextTopLoader color="#af3c41" />
      <Header />
      <div className="md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sheet>
                <SheetTrigger className="lg:hidden">
                  <HamburgerMenuIcon className="top-0 -mt-11 ml-6 h-6 w-6 text-gray-500" />
                </SheetTrigger>
                <SheetContent side="left">
                  <Sidebar
                    items={sidebarNavItems}
                    onItemClick={handleItemClick}
                  />
                </SheetContent>
              </Sheet>
              <Sidebar
                className={`lg:block ${showSidebar ? 'block' : 'hidden'}`}
                items={sidebarNavItems}
                onItemClick={handleItemClick}
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
