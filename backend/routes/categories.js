const express = require('express');
const pool = require('../src/db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, name FROM categories');
    res.json(rows);
  } catch (err) {
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const { rows } = await pool.query('INSERT INTO categories(name) VALUES($1) RETURNING *', [name]);
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'db error' });
  }
});

module.exports = router;
