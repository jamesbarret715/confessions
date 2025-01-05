import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL })

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({ adapter: new PrismaNeon(neon) })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma