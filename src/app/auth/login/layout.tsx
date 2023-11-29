import { ThemeProvider } from '@/components/theme-provider'
import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Login - CSI',
  description: 'Faça login na plataforma CSI',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12 bg-background">
      <NextTopLoader color="#af3c41" />
      {children}
    </div>
  )
}
