'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { toas, toast } from 'sonner'

import { caveat } from '@/app/fonts'

export default function CarteirinhaHome() {
	return (
		<div className="flex flex-col items-center justify-center">
			<Card className="h-full w-full">
				<CardHeader>
					<CardTitle className={caveat.className}>Carteirinhas</CardTitle>
					<CardDescription>Gerencie as carteirinhas</CardDescription>
				</CardHeader>
				<CardContent>
					<Button
						onClick={() => {
							toast.success('Event has been created')
						}}
					>
						Hello world
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}
