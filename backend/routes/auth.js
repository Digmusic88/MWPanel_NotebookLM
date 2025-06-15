const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Placeholder authentication
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });
  res.json({ token: 'fake-jwt-token', email });
});

module.exports = router;
