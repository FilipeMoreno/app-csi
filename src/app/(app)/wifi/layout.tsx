import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Wi-Fi Voucher | Colégio Santo Inácio',
  description: 'Geração de vouchers para conexão wi-fi',
}

export default function WifiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
