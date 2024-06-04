import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Login | Colégio Santo Inácio',
	description: 'Página de login do APP do Colégio Santo Inácio',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-12 bg-background">
			{children}
		</div>
	)
}
