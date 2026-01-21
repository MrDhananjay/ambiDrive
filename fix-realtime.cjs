
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
        console.log("Connected.");

        // Check count
        const res = await client.query('SELECT COUNT(*) FROM "Car"');
        console.log("Current Car Count:", res.rows[0].count);

        // Enable Realtime
        console.log("Enabling Realtime for Car table...");
        // Add table to publication (ignore error if already added)
        try {
            await client.query('ALTER PUBLICATION supabase_realtime ADD TABLE "Car"');
            console.log("Added Car to supabase_realtime publication.");
        } catch (e) {
            console.log("Publication update info:", e.message);
        }

        // Set REPLICA IDENTITY to FULL just in case (good practice for realtime)
        await client.query('ALTER TABLE "Car" REPLICA IDENTITY FULL');
        console.log("Set REPLICA IDENTITY FULL.");

        await client.end();
    } catch (e) {
        console.error("Error:", e);
        process.exit(1);
    }
}

run();
