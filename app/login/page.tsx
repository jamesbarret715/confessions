import { ReactNode } from "react";

import { Button, ButtonProps } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { FaGithub, FaGoogle } from "react-icons/fa";

import { signIn } from "@/lib/auth";

function LoginButton(
    { children, provider, ...props }:
        { children?: ReactNode, provider: "google" | "github" } & ButtonProps
) {
    return (
        <form action={async () => {
            "use server"
            await signIn(provider, {
                redirect: true,
                redirectTo: "/admin/home"
            })
        }}>
            <Button type="submit" className="flex flex-row justify-center w-full" {...props}>
                {children}
                Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
            </Button>
        </form>
    )
}

export default async function Login() {
    return <div className="flex items-center justify-center w-screen h-screen">
        <Card className="mx-4">
            <CardHeader>
                <CardTitle>Log In</CardTitle>
                <CardDescription>Use one of the providers below to log in.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-2 w-full">
                <LoginButton provider="google">
                    <FaGoogle />
                </LoginButton>
                <LoginButton provider="github">
                    <FaGithub />
                </LoginButton>
            </CardContent>
        </Card>
    </div>
}   