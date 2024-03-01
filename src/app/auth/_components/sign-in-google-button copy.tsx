import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export function SignInGoogleButton() {
	const [loading, setLoading] = useState(false)

	async function handleSignIn() {
		setLoading(true)

		await signIn('google', {
			callbackUrl: '/',
		})
	}

	return (
		<Button
			variant="outline"
			type="button"
			disabled={loading}
			onClick={handleSignIn}
		>
			{loading ? (
				<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
			) : (
				<Icons.google className="mr-6 h-6 w-6" />
			)}{' '}
			Continuar com Google
		</Button>
	)
}
