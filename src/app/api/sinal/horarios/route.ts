import { prisma } from '@/services/database'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(request: Request) {
	try {
		const response = await prisma.scheduleTimeSignal.findMany()

		if (response.length === 0) {
			return NextResponse.json({ message: 'No data found' })
		}

		return NextResponse.json(response)
	} catch (error) {
		return NextResponse.json({ message: 'Error', error })
	}
}

export async function POST(request: Request) {
	try {
		const schema = z.object({
			time: z.string(),
			duration: z.string(),
			day_of_week: z.enum([
				'SEGUNDA',
				'TERCA',
				'QUARTA',
				'QUINTA',
				'SEXTA',
				'SABADO',
				'DOMINGO',
			]),
		})

		const { time, duration, day_of_week } = schema.parse(await request.json())

		const check = await prisma.scheduleTimeSignal.findFirst({
			where: {
				time,
				day_of_week,
			},
		})

		if (check) {
			return NextResponse.json({ message: 'Time already exists' })
		}

		const response = await prisma.scheduleTimeSignal.create({
			data: {
				time,
				day_of_week,
				duration,
			},
		})

		return NextResponse.json(response)
	} catch (error) {
		return NextResponse.json({ message: 'Error', error })
	}
}
