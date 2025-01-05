import { type MiddlewareConfig } from "next/server"

export { auth as middleware } from "./lib/auth"

export const config: MiddlewareConfig = {
    matcher: ["/admin/:path*"]
}