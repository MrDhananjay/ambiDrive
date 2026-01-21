import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gauge, Calendar, MapPin, Fuel, Settings2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  location: string;
  images: string[];
  description: string;
  condition: "Excellent" | "Good" | "Fair";
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic" | "Semi-Automatic";
}

interface CarCardProps {
  car: Car;
  onEdit?: (car: Car) => void;
  onDelete?: (id: string) => void;
  isAdminView?: boolean;
}

export function CarCard({ car, onEdit, onDelete, isAdminView }: CarCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden bg-gray-100 relative group">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {car.images && car.images.length > 0 ? (
              car.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video w-full h-full">
                    <img
                      src={image}
                      alt={`${car.year} ${car.make} ${car.model} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))
            ) : (
              <CarouselItem>
                <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-400">
                  No Image
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          {car.images && car.images.length > 1 && (
            <>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CarouselPrevious className="static translate-y-0" />
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CarouselNext className="static translate-y-0" />
              </div>
            </>
          )}
        </Carousel>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-2xl font-bold text-blue-600 mt-1">
              ₹{car.price.toLocaleString()}
            </p>
          </div>
          <Badge variant={car.condition === "Excellent" ? "default" : "secondary"}>
            {car.condition}
          </Badge>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{car.description}</p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Gauge className="size-4" />
            <span>{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="size-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings2 className="size-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="size-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="size-4" />
            <span>{car.location}</span>
          </div>
        </div>
      </CardContent>

      {isAdminView && (
        <CardFooter className="p-4 pt-0 gap-2">
          <Button variant="outline" className="flex-1" onClick={() => onEdit?.(car)}>
            Edit
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="flex-1">
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  {car.year} {car.make} {car.model} from the database.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => onDelete?.(car.id)} className="bg-red-600 hover:bg-red-700">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      )}

      {!isAdminView && (
        <CardFooter className="p-4 pt-0">
          <Button className="w-full">View Details</Button>
        </CardFooter>
      )}
    </Card>
  );
}
