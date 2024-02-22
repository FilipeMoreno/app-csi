import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
	// TODO: Use env.NEXT_PUBLIC_API_URL
	// const baseUrl = env.NEXT_PUBLIC_API_URL
	const baseUrl = 'http://127.0.0.1:3333'

	const url = new URL(path, baseUrl)

	return fetch(url, init)
}
