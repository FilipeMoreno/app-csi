import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Configurações | Colégio Santo Inácio',
  description: 'Configurações dos usuários do sistema',
}

export default function ConfiguracoesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
