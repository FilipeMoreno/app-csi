const withPWA = require('@ducanh2912/next-pwa').default({
	swSrc: 'service-worker.js',
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swcMinify: true,
	dest: 'public',
	fallbacks: {
		image: '/images/offline.png',
		document: '/offline', // if you want to fallback to a custom page rather than /_offline
	},
	workboxOptions: {
		disableDevLogs: true,
	},
})

/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
				port: '',
			},
			{
				protocol: 'http',
				hostname: 'colegiosantoinacio.com.br',
				port: '',
			},
		],
	},
}

module.exports = withPWA(nextConfig)
