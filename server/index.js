require('dotenv').config(); // This loads environment variables from .env into process.env

// console.log(process.env)

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const authenticateToken = require('./authentication')

const app = express();
const port = 5000;

// PostgreSQL connection setup
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

// Middleware to parse JSON requests
app.use(cors({
    origin: 'https://mi3lschool.org'
}));
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

app.patch('/set-user-role', authenticateToken, async (req, res) => {
    const user = req.body
    console.log(user)
    const query1 = `
        UPDATE users 
        SET admin = $1, member = $2
        WHERE id = $3
    `
    // const query2 = `
    //     INSERT INTO auth
    //     VALUES ($1, $2)
    // `
    // const query3 = `
    //     DELETE FROM auth
    //     WHERE page_id = $1 AND user_id = $2
    // `
    try {
        await pool.query(query1, [user.admin, user.member, user.id]);

        res.status(200).send("Updated user info successfully");
    } catch (err) {
        console.error('Error verifying admin:', err);
        res.status(500).send('Error verifying admin');
    }
});

app.post('/add-user', async (req, res) => {
    const user = req.body
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            member BOOL DEFAULT FALSE,
            admin BOOL DEFAULT FALSE
        )
    `;
    const query1 = `
        SELECT * FROM users WHERE email = $1
    `
    const query2 = `
        INSERT INTO users (name, email, admin)
        VALUES ($1, $2, $3)
    `
    try {
        await pool.query(createTableQuery);
        let r1 = await pool.query(query1, [user.email]);
        if (r1.rows.length > 0) {
            res.status(200).send("User already exists");
            return
        }
        result = await pool.query(query2, [user.name, user.email, false]);
        res.status(200).send("Added user successfully");
    } catch (err) {
        console.error('Error verifying admin:', err);
        res.status(500).send('Error verifying admin');
    }
});

app.get('/get-users', authenticateToken, async (req, res) => {
    
    const selectTableQuery = `
    SELECT * FROM users
    ORDER BY id
`
    try {
        result = await pool.query(selectTableQuery);
        res.status(200).send(result.rows);
    } catch (err) {
        console.error('Error getting items:', err);
        res.status(500).send('Error getting item');
    }
})

app.post('/verify-admin', async (req, res) => {
    const email = req.body.email;

    const query = `
        SELECT * FROM users WHERE email = $1
    `;

    try {
        let result = await pool.query(query, [email]);
        if (result.rows.length === 0) {
            res.status(200).send(false);
            return;
        }
        res.status(200).send(result.rows[0].admin);
    } catch (err) {
        console.error('Error verifying admin:', err);
        res.status(500).send('Error verifying admin');
    }
});

app.post('/verify-access', async (req, res) => {
    const email = req.body.email;
    const page = req.body.page_id;

    const query1= `
        SELECT * FROM users WHERE email = $1
    `;

    const query2 = `
        SELECT * FROM auth 
        WHERE page_id = $1 AND user_id = $2
    `

    try {
        let result = await pool.query(query1, [email]);
        if (result.rows.length === 0) {
            res.status(200).send(false);
            return;
        }
        if (result.rows[0].member === true) {
            res.status(200).send(true);
            return;
        }
        else {
            let result2 = await pool.query(query2, [page, result.rows[0].id]);
            if (result2.rows.length === 0) {
                res.status(200).send(false);
                return;
            }
            res.status(200).send(true);
        }
    } catch (err) {
        console.error('Error verifying admin:', err);
        res.status(500).send('Error verifying admin');
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// module.exports = app;