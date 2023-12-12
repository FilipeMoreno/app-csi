import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chamados | Colégio Santo Inácio',
  description: 'Controle de chamados técnicos',
}

export default function ChamadosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
