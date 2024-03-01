import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

import { env } from '@/env'

let prisma: PrismaClient

if (env.NODE_ENV === 'production') {
	prisma = new PrismaClient().$extends(withAccelerate())
} else {
	// @ts-expect-error GlobalPrisma
	if (!global.prisma) {
		// @ts-expect-error GlobalPrisma
		global.prisma = new PrismaClient().$extends(withAccelerate())
	}

	// @ts-expect-error GlobalPrisma
	prisma = global.prisma
}

export { prisma }
