const express = require('express');
const pool = require('../src/db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, course_id, title, due_date FROM assignments');
    res.json(rows);
  } catch (err) {
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    const { course_id, title, description, due_date } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO assignments(course_id, title, description, due_date) VALUES($1, $2, $3, $4) RETURNING *',
      [course_id, title, description, due_date]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'db error' });
  }
});

module.exports = router;
