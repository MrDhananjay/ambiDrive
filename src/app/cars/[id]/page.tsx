import { getCarById } from "@/actions/car-actions";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Gauge,
    Calendar,
    MapPin,
    Fuel,
    Settings2,
    ChevronLeft,
    ShieldCheck,
    CircleCheck,
    Phone,
    MessageSquare,
    Share2,
    Heart
} from "lucide-react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/navbar";
import { Car } from "@/components/car-card";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function CarDetailsPage({ params }: PageProps) {
    const { id } = await params;
    const car = await getCarById(id) as unknown as Car;

    if (!car) {
        notFound();
    }

    const whatsappMessage = `Hello, I'm interested in the ${car.year} ${car.make} ${car.model} listed for ₹${car.price.toLocaleString()} on AmbiDrive. (Ref: ${car.id.slice(0, 8).toUpperCase()})`;
    const whatsappUrl = `https://wa.me/919716939548?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Images and Description */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Gallery */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {car.images && car.images.length > 0 ? (
                                        car.images.map((image, index) => (
                                            <CarouselItem key={index}>
                                                <div className="aspect-[16/9] w-full">
                                                    <img
                                                        src={image}
                                                        alt={`${car.make} ${car.model} - ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))
                                    ) : (
                                        <CarouselItem>
                                            <div className="aspect-[16/9] flex items-center justify-center bg-gray-100 text-gray-400">
                                                No Image Available
                                            </div>
                                        </CarouselItem>
                                    )}
                                </CarouselContent>
                                {car.images && car.images.length > 1 && (
                                    <>
                                        <CarouselPrevious className="left-4" />
                                        <CarouselNext className="right-4" />
                                    </>
                                )}
                            </Carousel>

                            {/* Thumbnail strip (optional enhancement) */}
                            {car.images && car.images.length > 1 && (
                                <div className="flex gap-2 p-4 overflow-x-auto border-t">
                                    {car.images.map((img, i) => (
                                        <div key={i} className="size-20 rounded-md overflow-hidden flex-shrink-0 border cursor-pointer hover:opacity-80 transition-opacity">
                                            <img src={img} className="w-full h-full object-cover" alt="" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border space-y-6">
                            <h2 className="text-2xl font-bold">About this vehicle</h2>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                                {car.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                                    <ShieldCheck className="size-6 text-blue-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900">Certified Quality</h4>
                                        <p className="text-sm text-blue-700">This vehicle has passed our rigorous 150-point inspection.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                                    <CircleCheck className="size-6 text-green-600 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-green-900">Warranty Included</h4>
                                        <p className="text-sm text-green-700">6-month powertrain warranty included at no extra cost.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Key Details & Pricing */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border space-y-6 sticky top-28">
                            <div>
                                <Badge className="mb-4" variant={car.condition === "Excellent" ? "default" : "secondary"}>
                                    {car.condition} Condition
                                </Badge>
                                <h1 className="text-3xl font-bold">
                                    {car.year} {car.make} {car.model}
                                </h1>
                                <p className="text-4xl font-extrabold text-blue-600 mt-4">
                                    ₹{car.price.toLocaleString()}
                                </p>
                            </div>

                            <div className="space-y-4 pt-4 border-t">
                                <div className="flex justify-between items-center text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Gauge className="size-5 text-gray-400" />
                                        <span>Mileage</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{car.mileage.toLocaleString()} km</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Fuel className="size-5 text-gray-400" />
                                        <span>Fuel Type</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{car.fuelType}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Settings2 className="size-5 text-gray-400" />
                                        <span>Transmission</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{car.transmission}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="size-5 text-gray-400" />
                                        <span>Year</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{car.year}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="size-5 text-gray-400" />
                                        <span>Location</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">{car.location}</span>
                                </div>
                            </div>

                            <div className="space-y-3 pt-6">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
                                            <Phone className="size-5 mr-2" /> Contact Seller
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-md">
                                        <DialogHeader>
                                            <DialogTitle>Contact Seller</DialogTitle>
                                            <DialogDescription>
                                                Call or message the seller to inquire about this {car.make} {car.model}.
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
                            </div>

                            <div className="pt-4 text-center">
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                                    Reference ID: {car.id.slice(0, 8).toUpperCase()}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
