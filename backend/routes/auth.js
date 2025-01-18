const express = require('express');
const router = express.Router();
const { verifyCredentials } = require('../models/admin');

router.post('/home/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Missing email, password, or role' });
    }

    const user = await verifyCredentials(email, password, role);
    if (user) {
      const redirect = role === 'CRC' ? '/home/crc' : '/home/pi';
      return res.status(200).json({ message: 'Login successful', redirect });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
