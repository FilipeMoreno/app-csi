import { prisma } from '@/services/database'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const email = z.string().email().parse(searchParams.get('email'))

		const notifications = await prisma.$transaction(async (tx) => {
			const notifications = await tx.notification.findMany({
				where: {
					user: {
						email,
					},
					read: false,
				},
			})
			const count = await tx.notification.count({
				where: {
					user: {
						email,
					},
					read: false,
				},
			})
			const arquivadas = await tx.notification.findMany({
				where: {
					user: {
						email,
					},
					read: true,
				},
				take: 5,
			})
			return { notifications, count, arquivadas }
		})

		return NextResponse.json(notifications)
	} catch (error) {
		return NextResponse.json({ message: 'Error', error })
	}
}
