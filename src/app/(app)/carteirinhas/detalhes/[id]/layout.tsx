import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Carteirinhas - CSI',
  description: 'Aplicativo de carteirinhas do CSI',
}

export default function CarteirinhasDetalhes({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
