import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export interface FilterState {
    search: string;
    priceRange: [number, number];
    fuelType: string[];
    transmission: string[];
}

interface CarFiltersProps {
    onFilterChange: (filters: FilterState) => void;
}

export function CarFilters({ onFilterChange }: CarFiltersProps) {
    const [filters, setFilters] = useState<FilterState>({
        search: "",
        priceRange: [0, 20000000], // 0 to 2 Crores
        fuelType: [],
        transmission: [],
    });

    // Debounce filter updates to avoid excessive re-renders/filtering
    useEffect(() => {
        const timer = setTimeout(() => {
            onFilterChange(filters);
        }, 300);
        return () => clearTimeout(timer);
    }, [filters, onFilterChange]);

    const handleCheckboxChange = (
        type: "fuelType" | "transmission",
        value: string,
        checked: boolean | string
    ) => {
        setFilters((prev) => {
            const current = prev[type];
            const updated = checked
                ? [...current, value]
                : current.filter((item) => item !== value);
            return { ...prev, [type]: updated };
        });
    };

    const handlePriceChange = (value: number[]) => {
        setFilters((prev) => ({ ...prev, priceRange: [value[0], value[1]] as [number, number] }));
    };

    return (
        <div className="space-y-6 p-4 bg-white rounded-lg border">
            <div>
                <h3 className="font-semibold mb-4">Search</h3>
                <Input
                    placeholder="Search Make or Model..."
                    value={filters.search}
                    onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
                />
            </div>

            <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                    <Slider
                        defaultValue={[0, 20000000]}
                        max={20000000}
                        step={100000}
                        value={filters.priceRange}
                        onValueChange={handlePriceChange}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>₹{filters.priceRange[0].toLocaleString()}</span>
                        <span>₹{filters.priceRange[1].toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-3">Fuel Type</h3>
                <div className="space-y-2">
                    {["Petrol", "Diesel", "Electric", "Hybrid"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                                id={`fuel-${type}`}
                                checked={filters.fuelType.includes(type)}
                                onCheckedChange={(checked) => handleCheckboxChange("fuelType", type, checked)}
                            />
                            <Label htmlFor={`fuel-${type}`}>{type}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-3">Transmission</h3>
                <div className="space-y-2">
                    {["Manual", "Automatic", "Semi-Automatic"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <Checkbox
                                id={`trans-${type}`}
                                checked={filters.transmission.includes(type)}
                                onCheckedChange={(checked) => handleCheckboxChange("transmission", type, checked)}
                            />
                            <Label htmlFor={`trans-${type}`}>{type}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <Button
                variant="outline"
                className="w-full"
                onClick={() => setFilters({
                    search: "",
                    priceRange: [0, 20000000],
                    fuelType: [],
                    transmission: [],
                })}
            >
                Reset Filters
            </Button>
        </div>
    );
}
