import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export type SubmitResponse = {
    message: string,
    description: string
}

export async function POST(req: NextRequest): Promise<NextResponse<SubmitResponse>> {
    const submission = await req.text()

    try {
        await prisma.submission.create({ data: { content: submission } })
        return NextResponse.json(
            {
                message: "Success!",
                description: "Your submission should be posted soon. Keep an eye out!"
            }
        )
    } catch (e) {
        return NextResponse.json(
            {
                message: "Something went wrong.",
                description: "There was an error while processing your submission."
            },
            {
                status: 500,
                statusText: e as string
            }
        )
    }
}