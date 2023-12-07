import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Agendamentos | Colégio Santo Inácio',
  description: 'Agendamentos de salas e laboratórios',
}

export default function ReservasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
