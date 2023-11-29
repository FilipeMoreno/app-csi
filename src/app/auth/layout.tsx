import { ThemeProvider } from '@/components/theme-provider'
import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Auth - CSI',
  description: 'Autentique-se na plataforma CSI',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextTopLoader color="#af3c41" />
      {children}
    </ThemeProvider>
  )
}
