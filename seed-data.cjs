
const { Client } = require('pg');

const config = {
    user: 'postgres.lwqvucploffjyxoaiesf',
    password: 'AmbiDrive2025',
    host: 'aws-1-ap-south-1.pooler.supabase.com',
    port: 6543,
    database: 'postgres',
    ssl: {
        rejectUnauthorized: false
    }
};

const initialCars = [
    {
        id: "1",
        make: "Mercedes-Benz",
        model: "E-Class",
        year: 2021,
        price: 4500000,
        mileage: 45000,
        location: "Mumbai, MH",
        image: "https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3Njg5NjYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Luxury sedan with premium leather interior, advanced safety features, and impeccable maintenance history.",
        condition: "Excellent",
        fuelType: "Diesel",
        transmission: "Automatic",
    },
    {
        id: "2",
        make: "Jeep",
        model: "Grand Cherokee",
        year: 2020,
        price: 3800000,
        mileage: 68000,
        location: "Bangalore, KA",
        image: "https://images.unsplash.com/photo-1708148246994-b7b3c818090d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2ODk2NDUyNXww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "4WD SUV perfect for adventures. Loaded with technology and comfort features for the whole family.",
        condition: "Good",
        fuelType: "Diesel",
        transmission: "Automatic",
    },
    {
        id: "3",
        make: "Porsche",
        model: "911 Carrera",
        year: 2019,
        price: 12000000,
        mileage: 29000,
        location: "Delhi, DL",
        image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzY4OTczNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Iconic sports car with legendary performance. One owner, pristine condition, full service records.",
        condition: "Excellent",
        fuelType: "Petrol",
        transmission: "Automatic",
    },
    {
        id: "4",
        make: "Ford",
        model: "Endeavour",
        year: 2022,
        price: 3600000,
        mileage: 24000,
        location: "Hyderabad, TG",
        image: "https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrdXAlMjB0cnVja3xlbnwxfHx8fDE3Njg5NzM2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "High-performance off-road SUV. Perfect blend of utility and adventure capability.",
        condition: "Excellent",
        fuelType: "Diesel",
        transmission: "Automatic",
    },
    {
        id: "5",
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        price: 4500000,
        mileage: 12000,
        location: "Pune, MH",
        image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGNhcnxlbnwxfHx8fDE3Njg4NzIxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Electric sedan with autopilot, long range battery, and cutting-edge technology. Like new condition.",
        condition: "Excellent",
        fuelType: "Electric",
        transmission: "Automatic",
    },
    {
        id: "6",
        make: "Maruti Suzuki",
        model: "Ertiga",
        year: 2024,
        price: 1200000,
        mileage: 5000,
        location: "Delhi, DL",
        image: "https://images.unsplash.com/photo-1698224534011-82d2571216a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYXJ8ZW58MXx8fHwxNzY4OTczNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "Modern 7-seater MUV with factory-fitted S-CNG technology for maximum efficiency and low running costs.",
        condition: "Excellent",
        fuelType: "CNG",
        transmission: "Manual",
    },
];

const client = new Client(config);

async function run() {
    try {
        await client.connect();

        for (const car of initialCars) {
            const query = `
                INSERT INTO "Car" ("id", "make", "model", "year", "price", "mileage", "location", "image", "description", "condition", "fuelType", "transmission", "updatedAt")
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW())
                ON CONFLICT ("id") DO NOTHING;
            `;
            const values = [
                car.id, car.make, car.model, car.year, car.price, car.mileage,
                car.location, car.image, car.description, car.condition,
                car.fuelType, car.transmission
            ];
            await client.query(query, values);
            console.log(`Inserted car: ${car.make} ${car.model}`);
        }

        console.log("Seeding completed.");

        const res = await client.query('SELECT COUNT(*) FROM "Car"');
        console.log("Final Car Count:", res.rows[0].count);

        await client.end();
    } catch (e) {
        console.error("Error seeding data:", e);
        process.exit(1);
    }
}

run();
