"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";

interface ContactDialogProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export function ContactDialog({
    children,
    title = "Contact Us",
    description = "Call or message us for inquiries about selling, financing, or any other questions."
}: ContactDialogProps) {
    const whatsappMessage = `Hello, I'm interested in ${title.toLowerCase()} services on AmbiDrive.`;
    const whatsappUrl = `https://wa.me/919716939548?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center py-6 space-y-4">
                    <div className="bg-blue-50 p-4 rounded-full">
                        <Phone className="size-8 text-blue-600" />
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                        <p className="text-3xl font-bold text-gray-900 tracking-tight">
                            +91 97169 39548
                        </p>
                    </div>
                    <div className="flex gap-2 w-full mt-4">
                        <Button className="flex-1" asChild>
                            <a href="tel:9716939548">Call Now</a>
                        </Button>
                        <Button variant="outline" className="flex-1" asChild>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                WhatsApp
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
