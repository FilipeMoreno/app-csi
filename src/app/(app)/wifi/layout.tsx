import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Wi-Fi Voucher - CSI',
  description: 'Aplicativo para geração de vouchers para conexão wi-fi',
}

export default function WifiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
