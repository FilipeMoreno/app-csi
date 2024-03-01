import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '../database'

export const credentialsProvider = CredentialsProvider({
	name: 'Credentials',
	credentials: {
		email: {
			label: 'E-mail',
			type: 'email',
		},
		password: {
			label: 'Password',
			type: 'password',
		},
	},
	async authorize(credentials) {
		if (
			credentials?.email === 'admin@rocketseat.team' &&
			credentials.password === '123456'
		) {
			return {
				id: crypto.randomUUID(),
				email: credentials.email,
				name: 'Rocketseat',
				image: 'https://github.com/rocketseat.png',
			}
		}

		throw new Error('Unauthorized.')
	},
})
