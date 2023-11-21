import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'QRCode Scanner - CSI',
  description: 'Scanner de QRCode',
}

export default function CarteirinhasScanner({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
