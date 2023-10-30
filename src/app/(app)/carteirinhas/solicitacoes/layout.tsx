import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Solicitações - CSI',
  description: 'Solicitações de carteirinhas de estudante',
}

export default function WifiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
