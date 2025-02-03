const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.get('/tracks', async (req, res) => {
    const result = await pool.query('SELECT * FROM tracks');
    res.json(result.rows);
});

app.listen(3000, () => console.log('API running on port 3000'));
