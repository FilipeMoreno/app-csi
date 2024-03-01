import { read } from 'fs'
import { prisma } from '@/services/database'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const email = z.string().email().parse(searchParams.get('email'))

		const updateNotification = await prisma.notification.updateMany({
			where: {
				user: {
					email,
				},
			},
			data: {
				read: true,
			},
		})

		return NextResponse.json({ message: 'Success', updateNotification })
	} catch (error) {
		return NextResponse.json({ message: 'Error', error })
	}
}
