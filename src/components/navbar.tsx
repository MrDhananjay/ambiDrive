"use client";

import Link from "next/link";
import { Car as CarIcon } from "lucide-react";
import { ContactDialog } from "./contact-dialog";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <CarIcon className="size-8 text-blue-600" />
                        <span className="text-2xl font-bold">AmbiDrive</span>
                    </Link>
                    <div className="flex gap-6 text-sm font-medium">
                        <ContactDialog title="Sell Your Car" description="Talk to our experts about selling your car for the best price.">
                            <button className="hover:text-blue-600 transition-colors">Sell</button>
                        </ContactDialog>
                        <ContactDialog title="Car Finance" description="Explore financing options and get the best interest rates.">
                            <button className="hover:text-blue-600 transition-colors">Finance</button>
                        </ContactDialog>
                        <ContactDialog title="Contact Us" description="Get in touch with our support team for any assistance.">
                            <button className="hover:text-blue-600 transition-colors">Contact Us</button>
                        </ContactDialog>
                    </div>
                </div>
            </div>
        </nav>
    );
}
