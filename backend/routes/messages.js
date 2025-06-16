const express = require('express');
const pool = require('../src/db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, sender_id, recipient_id, content, created_at FROM messages');
    res.json(rows);
  } catch (err) {
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    const { sender_id, recipient_id, content } = req.body;
    const { rows } = await pool.query('INSERT INTO messages(sender_id, recipient_id, content) VALUES($1, $2, $3) RETURNING *', [sender_id, recipient_id, content]);
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'db error' });
  }
});

module.exports = router;
