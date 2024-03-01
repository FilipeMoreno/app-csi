import { prisma } from '@/services/database'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url)
		const email = z.string().email().parse(searchParams.get('email'))

		const profile = await prisma.user.findUnique({
			where: {
				email,
			},
			select: {
				id: true,
				name: true,
				email: true,
				emailVerified: true,
				image: true,
				createdAt: true,
				updatedAt: true,
				accounts: true,
			},
		})

		const appointments = await prisma.appointment.findMany({
			where: {
				appointmentUser: {
					email,
				},
			},
			include: {
				sector: true,
				time: true,
			},
		})

		return NextResponse.json({ profile, appointments })
	} catch (error) {
		return NextResponse.json({ message: 'Error', error })
	}
}
