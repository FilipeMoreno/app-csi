import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Sinaleiro - CSI',
  description: 'Aplicativo para controle de sinal',
  openGraph: {
    images: 'http://colegiosantoinacio.com.br/img/favicon.ico',
  },
}

export default function SinaleiroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
