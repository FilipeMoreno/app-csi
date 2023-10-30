import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Carteirinhas - CSI',
  description: 'Aplicativo para geração de carteirinhas de estudante',
}

export default function WifiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
