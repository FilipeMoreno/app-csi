import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Configurações - CSI',
  description: 'Configurações do usuário',
}

export default function ConfiguracoesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
