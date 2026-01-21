
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

const client = new Client(config);

const createTableSQL = `
CREATE TABLE IF NOT EXISTS "Car" (
    "id" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "mileage" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
`;

async function run() {
    try {
        await client.connect();
        console.log("Connected to database.");
        await client.query(createTableSQL);
        console.log("Table 'Car' created successfully.");
        await client.end();
    } catch (e) {
        console.error("Error creating table:", e);
        process.exit(1);
    }
}

run();
