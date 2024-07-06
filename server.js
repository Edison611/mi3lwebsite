require('dotenv').config(); // This loads environment variables from .env into process.env

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

// PostgreSQL connection setup
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

app.get('/test-db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT NOW() as current_time');
        const currentTime = result.rows[0].current_time;
        client.release(); // Release the client back to the pool
        res.send(`Database connected successfully. Current time: ${currentTime}`);
    } catch (err) {
        console.error('Error connecting to database', err);
        res.status(500).send('Error connecting to database');
    }
});

app.get('/drop-table', async (req, res) => {
    try {
        await pool.query('DROP TABLE IF EXISTS summer2024course');
        res.status(200).send('Table dropped successfully');
    } catch (err) {
        console.error('Error dropping table:', err);
        res.status(500).send('Error dropping table');
    }
});

// app.post('/del/summer2024course', async (req, res) => {
//     const createTableQuery = `
//         CREATE TABLE IF NOT EXISTS Summer2024Course (
//             id SERIAL PRIMARY KEY,
//             date VARCHAR(255) NOT NULL,
//             description TEXT NOT NULL,
//             teacher VARCHAR(255) NOT NULL
//         )
//     `;

//     try {
//         res.status(200).send('Added items successfully');
//     } catch (err) {
//         console.error('Error initializing items:', err);
//         res.status(500).send('Error posting item');
//     }
// });

app.post('/add', async (req, res) => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS Summer2024Course (
            id SERIAL PRIMARY KEY,
            date VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            teachers VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            price_for_lesson INT NOT NULL
        )
    `;

    try {
        // Create the items table if it doesn't exist
        await pool.query(createTableQuery);

        // Insert preset items
        item = req.body
        console.log(item)
        const insertItemQuery = `
        INSERT INTO Summer2024Course (date, description, teachers, price, price_for_lesson)
        VALUES ($1, $2, $3, $4, $5)
        `;
        await pool.query(insertItemQuery, [item.date, item.description, item.teachers, item.price, item.price_for_lesson]);

        res.status(200).send('Added items successfully');
    } catch (err) {
        console.error('Error initializing items:', err);
        res.status(500).send('Error posting item');
    }
});

app.get('/get-lessons', async (req, res) => {
    const selectTableQuery = `
        SELECT * FROM Summer2024Course
    `;

    try {
        // Create the items table if it doesn't exist
        result = await pool.query(selectTableQuery);
        
        res.status(200).send(result.rows);
    } catch (err) {
        console.error('Error initializing items:', err);
        res.status(500).send('Error posting item');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
