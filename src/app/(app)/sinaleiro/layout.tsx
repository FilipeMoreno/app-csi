import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Sinaleiro - CSI',
  description: 'Aplicativo para controle de sinal',
}

export default function SinaleiroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
