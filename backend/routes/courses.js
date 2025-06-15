const express = require('express');
const pool = require('../src/db');
const router = express.Router();

router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT id, title FROM courses');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  const { rows } = await pool.query('INSERT INTO courses(title) VALUES($1) RETURNING *', [title]);
  res.status(201).json(rows[0]);
});

module.exports = router;
