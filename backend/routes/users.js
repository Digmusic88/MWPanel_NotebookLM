const express = require('express');
const pool = require('../src/db');
const router = express.Router();

router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT id, name, role FROM users');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { name, role } = req.body;
  const { rows } = await pool.query('INSERT INTO users(name, role) VALUES($1, $2) RETURNING *', [name, role]);
  res.status(201).json(rows[0]);
});

module.exports = router;
