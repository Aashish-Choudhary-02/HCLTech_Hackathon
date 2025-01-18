const express = require('express');
const router = express.Router();
const { verifyCredentials, getTrialProgress, getParticipantHealthData } = require('../models/admin');

// Admin Login
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Missing email, password, or role' });
    }

    const user = await verifyCredentials(email, password, role);
    if (user) {
      res.status(200).json({ message: 'Login successful', role: user.role });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get Participant Health Data
router.get('/participant/:id', async (req, res) => {
  const participantId = req.params.id;
  console.log(`Fetching health data for participant ID: ${participantId}`);
  try {
    const healthData = await getParticipantHealthData(participantId);
    res.status(200).json({ health_data: healthData.rows });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
