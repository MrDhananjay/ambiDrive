"use client";

import { Car as CarIcon } from "lucide-react";
import Link from "next/link";

export default function SellPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <CarIcon className="size-8 text-blue-600" />
                            <span className="text-2xl font-bold">AmbiDrive</span>
                        </Link>
                        <div className="flex gap-6 text-sm font-medium">
                            <Link href="/sell" className="hover:text-blue-600 transition-colors">Sell</Link>
                            <Link href="/finance" className="hover:text-blue-600 transition-colors">Finance</Link>
                            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-4">Sell Your Car</h1>
                <p className="text-muted-foreground">Get the best value for your vehicle with our streamlined selling process.</p>
            </div>
        </div>
    );
}
