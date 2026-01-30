"use server";

import { prisma } from "@/lib/prisma";
import { Car } from "@/components/car-card";
import { revalidatePath } from "next/cache";

// Map Prisma Car model to our frontend Car interface if necessary
// Our schema matches the interface closely, except ID is string (UUID)
// and we have createdAt/updatedAt which we might not show in the UI yet.

export async function getCars() {
    try {
        const cars = await prisma.car.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return cars;
    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
}

export async function getCarById(id: string) {
    try {
        const car = await prisma.car.findUnique({
            where: { id },
        });
        return car;
    } catch (error) {
        console.error(`Error fetching car with ID ${id}:`, error);
        return null;
    }
}

export async function addCar(data: Omit<Car, "id">) {
    try {
        const car = await prisma.car.create({
            data: {
                make: data.make,
                model: data.model,
                year: data.year,
                price: data.price,
                mileage: data.mileage,
                location: data.location,
                images: data.images,
                description: data.description,
                condition: data.condition,
                fuelType: data.fuelType, // Optional in interface? Check schema.
                transmission: data.transmission,
            },
        });
        revalidatePath("/");
        revalidatePath("/admin");
        return car;
    } catch (error) {
        console.error("Error adding car:", JSON.stringify(error, null, 2));
        console.error("Input data:", JSON.stringify(data, null, 2));
        throw new Error("Failed to add car");
    }
}

export async function updateCar(data: Car) {
    try {
        const car = await prisma.car.update({
            where: { id: data.id },
            data: {
                make: data.make,
                model: data.model,
                year: data.year,
                price: data.price,
                mileage: data.mileage,
                location: data.location,
                images: data.images,
                description: data.description,
                condition: data.condition,
                fuelType: data.fuelType,
                transmission: data.transmission,
            },
        });
        revalidatePath("/");
        revalidatePath("/admin");
        return car;
    } catch (error) {
        console.error("Error updating car:", error);
        throw new Error("Failed to update car");
    }
}

export async function deleteCar(id: string) {
    try {
        await prisma.car.delete({
            where: { id },
        });
        revalidatePath("/");
        revalidatePath("/admin");
        return true;
    } catch (error) {
        console.error(`Error deleting car with ID ${id}:`, JSON.stringify(error, null, 2));
        console.error(error);
        throw new Error("Failed to delete car");
    }
}
