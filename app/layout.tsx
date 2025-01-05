import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
    title: "Imperial Confessions",
    description: "Submit your confessions anonymously.",
};

const geist = Geist()

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geist.className}`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html >
    );
}
