import { SessionProvider } from "next-auth/react";
import MainNav from "./components/main-nav";
import UserNav from "./components/user-nav";
import { ThemeSwitcher } from "./components/theme-switcher";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    if (!session) return redirect("/login")

    return <>
        <div className="border-b">
            <div className="flex items-center h-16">
                <MainNav className="mx-8" />
                <div className="ml-auto mr-8 flex items-center space-x-4">
                    <ThemeSwitcher />
                    <SessionProvider>
                        <UserNav />
                    </SessionProvider>
                </div>
            </div>
        </div >
        <div className="p-8">
            {children}
        </div>
    </>

}