const express = require('express');
const pool = require('../src/db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, title, category_id FROM courses');
    res.json(rows);
  } catch (err) {
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, category_id } = req.body;
    const { rows } = await pool.query('INSERT INTO courses(title, category_id) VALUES($1, $2) RETURNING *', [title, category_id]);
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'db error' });
  }
});

module.exports = router;
