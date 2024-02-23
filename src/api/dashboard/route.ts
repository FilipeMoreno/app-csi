import { prisma } from '@/lib/prisma'

import { NextResponse } from 'next/server'

// export async function POST(request) {
// 	try {
// 		const data = await request.json()
// 		console.log(data)
// 		const { name, email } = data

// 		return NextResponse.json(data)
// 	} catch (error) {
// 		console.log('Error creating user:', error)
// 		return NextResponse.error('Internal Server Error', 500)
// 	}
// }

export async function GET(request) {
	try {
		const data = await request.json()
		// const users = await prisma.user.findMany()

		return NextResponse.json(data)
	} catch (error) {
		console.error('Error fetching users:', error)
		// return NextResponse.error('Internal Server Error', 500)
	}
}
