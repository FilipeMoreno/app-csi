import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scanner QRCode - Carteirinhas | Colégio Santo Inácio',
  description: 'Scanner QRCode para carteirinhas de estudantes',
}

export default function CarteirinhasScannerAcoes({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
