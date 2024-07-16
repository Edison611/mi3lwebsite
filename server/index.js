require('dotenv').config(); // This loads environment variables from .env into process.env

// console.log(process.env)

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

// PostgreSQL connection setup
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        res.send(`Connected to Backend`);
    } catch (err) {
        console.error('Error connecting to backend', err);
        res.status(500).send('Error connecting to backend');
    }
});

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
        await pool.query('DROP TABLE IF EXISTS courses');
        res.status(200).send('Table dropped successfully');
    } catch (err) {
        console.error('Error dropping table:', err);
        res.status(500).send('Error dropping table');
    }
});


app.post('/add-course', async (req, res) => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS courses (
            course_id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            price_for_lesson INT NOT NULL,
            active BOOLEAN
        )
    `;

    try {
        // Create the items table if it doesn't exist
        await pool.query(createTableQuery);

        // Insert preset items
        item = req.body
        console.log(item)
        const insertItemQuery = `
        INSERT INTO courses (name, price, price_for_lesson, active)
        VALUES ($1, $2, $3, $4)
        `;
        await pool.query(insertItemQuery, [item.name, item.price, item.price_for_lesson, item.ongoing]);

        res.status(200).send('Added items successfully');
    } catch (err) {
        console.error('Error initializing items:', err);
        res.status(500).send('Error posting item');
    }
});

app.post('/add-lesson', async (req, res) => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS lessons (
            id SERIAL PRIMARY KEY,
            course_id INT NOT NULL,
            date DATE NOT NULL,
            description TEXT NOT NULL,
            teachers VARCHAR(255) NOT NULL
        )
    `;

    try {
        // Create the items table if it doesn't exist
        await pool.query(createTableQuery);

        // Insert preset items
        item = req.body
        console.log(item)
        const insertItemQuery = `
        INSERT INTO lessons (course_id, date, description, teachers)
        VALUES ($1, $2, $3, $4)
        `;
        await pool.query(insertItemQuery, [item.course_id, item.date, item.description, item.teachers]);

        res.status(200).send('Added items successfully');
    } catch (err) {
        console.error('Error initializing items:', err);
        res.status(500).send('Error posting item');
    }
});

app.get('/courses', async (req, res) => {
    const selectTableQuery = `
        SELECT * FROM courses
    `;

    try {
        result = await pool.query(selectTableQuery);
        
        res.status(200).send(result.rows);
    } catch (err) {
        console.error('Error initializing items:', err);
        res.status(500).send('Error posting item');
    }
});

app.post('/course-lessons', async (req, res) => {
    const course = req.body.course_id
    const selectTableQuery = `
        SELECT * FROM lessons WHERE course_id = ${course}
    `;

    try {
        result = await pool.query(selectTableQuery);
        
        res.status(200).send(result.rows);
    } catch (err) {
        console.error('Error initializing items:', err);
        res.status(500).send('Error posting item');
    }
});

app.post('/course-info', async (req, res) => {
    const course = req.body.course_id
    const selectTableQuery = `
        SELECT * FROM courses 
        JOIN lessons ON 
            courses.course_id = lessons.course_id
        WHERE courses.course_id = ${course}
        ORDER BY date ASC
    `;

    try {
        result = await pool.query(selectTableQuery);
        
        res.status(200).send(result.rows);
    } catch (err) {
        console.error('Error initializing items:', err);
        res.status(500).send('Error posting item');
    }
});

app.post('/delete-lesson', async (req, res) => {
    const lesson = req.body.lesson_id
    const selectTableQuery = `
        DELETE FROM lessons WHERE id = ${lesson}
    `;

    try {
        result = await pool.query(selectTableQuery);
        res.status(200).send("Row Successfully Deleted");
    } catch (err) {
        console.error('Error deleting item:', err);
        res.status(500).send('Error deleting item');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// module.exports = app;