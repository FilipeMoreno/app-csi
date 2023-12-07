import { Toaster } from '@/components/ui/toaster'
import { Metadata } from 'next'

import NextTopLoader from 'nextjs-toploader'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Login | Colégio Santo Inácio',
  description: 'Página de login do APP do Colégio Santo Inácio',
}

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader color="#af3c41" />

      <div className="flex h-screen flex-col items-center justify-center gap-12 bg-background">
        {children}
      </div>

      <Toaster />
    </>
  )
}
