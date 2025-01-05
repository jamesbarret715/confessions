import { auth } from "@/lib/auth"
import { Session } from "next-auth"

export default async function Home() {
    const { user } = await auth() as Session

    return (
        <div className="w-full h-full p-4">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
        </div>
    )
}