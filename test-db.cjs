
const { Client } = require('pg');

const config = {
    user: 'postgres.lwqvucploffjyxoaiesf',
    password: 'AmbiDrive2025',
    host: 'aws-1-ap-south-1.pooler.supabase.com',
    port: 443,
    database: 'postgres',
    ssl: {
        rejectUnauthorized: false
    }
};

console.log('Connecting with config:', { ...config, password: '****' });

const client = new Client(config);

client.connect()
    .then(() => {
        console.log('Connected successfully!');
        return client.query('SELECT NOW()');
    })
    .then(res => {
        console.log('Query result:', res.rows[0]);
        return client.end();
    })
    .catch(err => {
        console.error('Connection error:', err.message);
        if (err.message.includes('password authentication failed')) {
            console.error('CRITICAL: The server rejected the password. Please reset it in Supabase dashboard.');
        }
        process.exit(1);
    });
