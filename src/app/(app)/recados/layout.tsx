import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recados | Colégio Santo Inácio',
  description: 'Geração de recados',
}

export default function RecadoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
