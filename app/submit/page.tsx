"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { SubmitResponse } from "../api/submit/route";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

const schema = z.object({
    content: z.string().nonempty()
})


export default function Submit() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
    })

    async function onSubmit({ content }: z.infer<typeof schema>) {
        const res = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: content
        })

        const { message, description } = await res.json() as SubmitResponse
        if (res.status === 200) {
            toast({
                title: message,
                description
            })
        } else {
            toast({
                title: message,
                description: <>
                    {description}
                    <span className="font-mono">{res.statusText}</span>
                </>,
                variant: "destructive"
            })
        }
    }

    return <>
        <Toaster />

        <div className="flex items-center justify-center w-screen h-screen">
            <Card className="w-full max-w-[512px] mx-4">
                <CardHeader>
                    <CardTitle>Submit Your Confession</CardTitle>
                    <CardDescription>All submissions are anonymous!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-2">
                            <FormField
                                control={form.control}
                                name="content"
                                render={(({ field }) =>
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder="Your deepest darkest secrets..." {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            >
                            </FormField>
                            {form.formState.isSubmitting
                                ? <Button disabled><Loader2 className="animate-spin" />Submitting</Button>
                                : <Button type="submit" disabled={!form.formState.isValid}>Submit</Button>
                            }
                        </form>
                    </Form>
                </CardContent>
            </Card >

            <div className="absolute left-4 bottom-4">
                <Link href="/admin" className="hover:underline text-muted-foreground text-sm">Admin</Link>
            </div>
        </div>
    </>
}