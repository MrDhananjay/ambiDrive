"use client";

import { Navbar } from "@/components/navbar";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-muted-foreground">Have questions? Reach out to our team for assistance.</p>
            </div>
        </div>
    );
}
