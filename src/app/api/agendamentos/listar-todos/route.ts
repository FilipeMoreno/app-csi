import { prisma } from '@/services/database'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const response = await prisma.appointment.findMany()

	if (response.length === 0) {
		return NextResponse.json({ message: 'No appointments found' })
	}

	return NextResponse.json(response)
}
