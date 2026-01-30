"use client";

import { Navbar } from "@/components/navbar";

export default function FinancePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-4">Financing Options</h1>
                <p className="text-muted-foreground">Explore our flexible financing options tailored to your needs.</p>
            </div>
        </div>
    );
}
