'use client'

import CookiesConsent from '@/components/CookiesConsent'
import { Toaster } from '@/components/ui/sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import { ReactNode, useState } from 'react'
import GoogleAnalytics from './GoogleAnalytics'

export default function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<NextTopLoader color="#af3c41" />
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			<CookiesConsent />
			<Toaster richColors closeButton />
			<SpeedInsights />
			<Analytics />
			<GoogleAnalytics />
		</ThemeProvider>
	)
}
