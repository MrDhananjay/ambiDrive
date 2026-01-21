import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CarProvider } from "@/context/CarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AmbiDrive",
    description: "Luxury Car Dealership",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <CarProvider>{children}</CarProvider>
            </body>
        </html>
    );
}
