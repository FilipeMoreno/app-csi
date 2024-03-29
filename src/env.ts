import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const nodeEnv = z.enum(['development', 'production', 'test'])

function requiredOnEnv(env: z.infer<typeof nodeEnv>) {
	return (value: any) => {
		if (env === process.env.NODE_ENV && !value) {
			return false
		}

		return true
	}
}

export const env = createEnv({
	server: {
		WISEFI_URL: z.string().min(1),
		WISEFI_ACCESS_TOKEN: z.string().min(1),
		GOOGLE_ID: z.string().min(1),
		SENTRY_DNS: z.string().min(1),
		DATABASE_URL: z.string().min(1),
	},
	client: {
		NEXT_PUBLIC_API_URL: z.string().min(1),
	},
	shared: {
		NODE_ENV: nodeEnv,
		VERCEL_ENV: z
			.enum(['production', 'preview', 'development'])
			.default('development'),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NODE_ENV: process.env.NODE_ENV,
		VERCEL_ENV: process.env.VERCEL_ENV,
	},
})
