"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Car } from "@/components/car-card";
import { getCars, addCar as addCarAction, updateCar as updateCarAction, deleteCar as deleteCarAction } from "@/actions/car-actions";
import { supabase } from "@/lib/supabase";

interface CarContextType {
    cars: Car[];
    addCar: (car: Omit<Car, "id">) => Promise<void>;
    editCar: (car: Car) => Promise<void>;
    deleteCar: (id: string) => Promise<void>;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export function CarProvider({ children }: { children: React.ReactNode }) {
    const [cars, setCars] = useState<Car[]>([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    // Initial fetch and Real-time subscription
    useEffect(() => {
        const fetchCars = async () => {
            const data = await getCars();
            // Prisma returns Date objects for createdAt/updatedAt which are not in our UI Car interface yet,
            // but they are spreadable. We cast to any/Car[] to satisfy TS.
            setCars(data as any as Car[]);
            setHasLoaded(true);
        };

        fetchCars();

        const channel = supabase
            .channel('realtime-cars')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'Car' },
                (payload) => {
                    console.log('Real-time change received:', payload);
                    if (payload.eventType === 'INSERT') {
                        setCars((prev) => [payload.new as any as Car, ...prev]);
                    } else if (payload.eventType === 'UPDATE') {
                        setCars((prev) =>
                            prev.map((car) => (car.id === payload.new.id ? (payload.new as any as Car) : car))
                        );
                    } else if (payload.eventType === 'DELETE') {
                        setCars((prev) => prev.filter((car) => car.id !== payload.old.id));
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const addCar = async (carData: Omit<Car, "id">) => {
        try {
            await addCarAction(carData);
            // State update handled by subscription
        } catch (error) {
            console.error("Failed to add car:", error);
            alert("Failed to add car. Please try again.");
        }
    };

    const editCar = async (updatedCar: Car) => {
        try {
            await updateCarAction(updatedCar);
            // State update handled by subscription
        } catch (error) {
            console.error("Failed to update car:", error);
            alert("Failed to update car. Please try again.");
        }
    };

    const deleteCar = async (id: string) => {
        try {
            await deleteCarAction(id);
            // State update handled by subscription
        } catch (error) {
            console.error("Failed to delete car:", error);
            alert("Failed to delete car. Please try again.");
        }
    };

    return (
        <CarContext.Provider value={{ cars, addCar, editCar, deleteCar }}>
            {children}
        </CarContext.Provider>
    );
}

export function useCarContext() {
    const context = useContext(CarContext);
    if (context === undefined) {
        throw new Error("useCarContext must be used within a CarProvider");
    }
    return context;
}
