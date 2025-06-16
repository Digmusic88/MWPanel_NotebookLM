const express = require('express');
const pool = require('../src/db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, name, role FROM users');
    res.json(rows);
  } catch (err) {
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, role } = req.body;
    const { rows } = await pool.query('INSERT INTO users(name, role) VALUES($1, $2) RETURNING *', [name, role]);
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'db error' });
  }
});

module.exports = router;
