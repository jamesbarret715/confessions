import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google, GitHub],
    pages: {
        signIn: "/login",
        newUser: "/admin",
        // TODO: error
    },
    callbacks: {
        signIn: async ({ user }) => {
            try {
                const wl = await prisma.whitelist.findFirstOrThrow({ where: { email: user.email || "" } })
                console.log(wl)
                return true
            } catch {
                return "/denied"
            }
        }
    }
})