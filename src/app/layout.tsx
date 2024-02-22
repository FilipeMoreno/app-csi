import { Metadata, Viewport } from 'next'
import Script from 'next/script'

import '@/styles/globals.css'
import { inter } from './fonts'
import Providers from './providers'

export const metadata: Metadata = {
	title: 'APP | Colégio Santo Inácio',
	description: 'Aplicativo do Colégio Santo Inácio',
	manifest: '/manifest.json',
}

export const viewport: Viewport = {
	width: 'device-width',
	height: 'device-height',
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'cyan' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR" className="antialiased" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />

				<meta property="og:image" content="https://i.imgur.com/V3yZGU7.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:alt" content="Logo CSI" />

				<meta name="twitter:image" content="https://i.imgur.com/V3yZGU7.png" />
				<meta name="twitter:image:type" content="image/png" />
				<meta name="twitter:image:width" content="1200" />
				<meta name="twitter:image:height" content="630" />
				<meta property="twitter:image:alt" content="Logo CSI" />

				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>

				<Script src="/register-sw.js" />
			</head>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
