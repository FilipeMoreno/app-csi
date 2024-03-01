import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import { env } from 'process'
import { prisma } from '../database'
import { credentialsProvider } from './credentials-provider'

export const {
	handlers: { GET, POST },
	auth,
} = NextAuth({
	session: { strategy: 'database' },
	pages: {
		signIn: '/auth',
		signOut: '/auth',
		error: '/auth',
		verifyRequest: '/auth',
		newUser: '/',
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		credentialsProvider,
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		}),
		GoogleProvider({
			clientId: env.GOOGLE_OAUTH_CLIENT_ID,
			clientSecret: env.GOOGLE_OAUTH_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
	],
})
