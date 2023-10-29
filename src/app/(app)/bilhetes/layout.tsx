import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Bilhetes - CSI',
}

export default function BilheteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
