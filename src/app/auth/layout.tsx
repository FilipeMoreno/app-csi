import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Login - CSI',
  description: 'Faça login na plataforma CSI',
}

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12 bg-background">
      {children}
    </div>
  )
}
