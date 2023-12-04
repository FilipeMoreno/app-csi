import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Reservas - CSI',
  description: 'Aplicativo de reservas do CSI',
}

export default function ReservasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
