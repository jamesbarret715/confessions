"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { useRouter } from "next/navigation"

export default function Denied() {
    const router = useRouter()

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <Card className="mx-4">
                <CardHeader>
                    <CardTitle>Access Denied</CardTitle>
                    <CardDescription>
                        You&apos;re not on the list, mate.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    This page is only accessible to page admins. <br />
                    If you think you should have access, get in touch.
                </CardContent>
                <CardFooter>
                    <Button className="w-24 ml-auto" onClick={() => router.push("/")}>Go Back</Button>
                </CardFooter>
            </Card>
        </div>
    )
}