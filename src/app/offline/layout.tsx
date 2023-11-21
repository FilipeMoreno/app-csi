import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Você está off-line',
}

export default function OfflineLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12 bg-background">
      <NextTopLoader color="#af3c41" />
      {children}
    </div>
  )
}
