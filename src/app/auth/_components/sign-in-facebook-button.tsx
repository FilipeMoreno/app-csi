import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export function SignInfFacebookButton() {
	const [loading, setLoading] = useState(false)

	async function handleSignIn() {
		setLoading(true)

		await signIn('facebook', {
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
				<Icons.facebook className="mr-2 h-2 w-1" />
			)}{' '}
			Continuar com Facebook
		</Button>
	)
}
