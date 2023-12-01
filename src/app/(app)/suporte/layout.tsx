import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Chamados - CSI',
  description: 'Aplicativo de chamados',
}

export default function ChamadosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
