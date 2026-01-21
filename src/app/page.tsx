"use client";

import Link from "next/link";
import { CarIcon } from "lucide-react";
import { CarListings } from "@/components/car-listings";
import { CarFilters, FilterState } from "@/components/car-filters";
import { useCarContext } from "@/context/CarContext";
import { useState, useMemo } from "react";

export default function Home() {
    const { cars } = useCarContext();
    const [filters, setFilters] = useState<FilterState>({
        search: "",
        priceRange: [0, 20000000],
        fuelType: [],
        transmission: [],
    });

    const filteredCars = useMemo(() => {
        return cars.filter((car) => {
            // Search filter
            const searchMatch =
                car.make.toLowerCase().includes(filters.search.toLowerCase()) ||
                car.model.toLowerCase().includes(filters.search.toLowerCase());

            // Price filter
            const priceMatch =
                car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];

            // Fuel Type filter
            const fuelMatch =
                filters.fuelType.length === 0 ||
                (car.fuelType && filters.fuelType.includes(car.fuelType));

            // Transmission filter
            const transMatch =
                filters.transmission.length === 0 ||
                (car.transmission && filters.transmission.includes(car.transmission));

            return searchMatch && priceMatch && fuelMatch && transMatch;
        });
    }, [cars, filters]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
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
                            <Link href="/admin" className="hover:text-blue-600 transition-colors hidden md:inline">Admin Panel</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <CarFilters onFilterChange={setFilters} />
                        </div>
                    </aside>

                    {/* Listings */}
                    <div className="flex-1">
                        <CarListings cars={filteredCars} />
                    </div>
                </div>
            </main>
        </div>
    );
}
