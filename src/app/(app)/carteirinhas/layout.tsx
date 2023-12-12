import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carteirinhas | Colégio Santo Inácio',
  description: 'Gestão de carteirinhas de estudantes',
}

export default function WifiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
