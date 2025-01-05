"use client"

import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const path = usePathname()

    const pages: { title: string, route: Url }[] = [
        { title: "Overview", route: "/admin/home" },
        { title: "Submissions", route: "/admin/submissions" },
        { title: "Settings", route: "/admin/settings" }
    ]

    return <nav className={cn("flex items-center justify-start space-x-4 lg:space-x-6", className)} {...props}>
        {pages.map(({ title, route }) =>
            <Link key={title} href={route} className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                path === route ? "text-foreground" : "text-muted-foreground"
            )}>{title}</Link>
        )}
    </nav>
}