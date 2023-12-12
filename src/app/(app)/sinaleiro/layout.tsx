import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sinaleiro | Colégio Santo Inácio',
  description: 'Controle de sinal de troca de aulas',
}

export default function SinaleiroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
