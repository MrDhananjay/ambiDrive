"use client";

import { Navbar } from "@/components/navbar";

export default function SellPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-4">Sell Your Car</h1>
                <p className="text-muted-foreground">Get the best value for your vehicle with our streamlined selling process.</p>
            </div>
        </div>
    );
}
