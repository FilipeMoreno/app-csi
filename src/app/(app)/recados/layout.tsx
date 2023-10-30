import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Recados - CSI',
  description: 'Aplicativo para geração de recados',
}

export default function RecadoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
