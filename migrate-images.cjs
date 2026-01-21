
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

async function run() {
    try {
        await client.connect();
        console.log("Connected to database for migration...");

        // 1. Add new column 'images' as TEXT array
        console.log("Adding 'images' column...");
        await client.query('ALTER TABLE "Car" ADD COLUMN IF NOT EXISTS "images" TEXT[];');

        // 2. Migrate data: move 'image' content to 'images' array
        console.log("Migrating data...");
        await client.query('UPDATE "Car" SET "images" = ARRAY["image"] WHERE "image" IS NOT NULL AND "images" IS NULL;');

        // 3. Drop old column 'image'
        // NOTE: In production, we might want to keep it briefly, but here we'll drop it to enforce the new schema.
        console.log("Dropping 'image' column...");
        await client.query('ALTER TABLE "Car" DROP COLUMN IF EXISTS "image";');

        console.log("Migration complete: image -> images[]");
        await client.end();
    } catch (e) {
        console.error("Migration failed:", e);
        process.exit(1);
    }
}

run();
