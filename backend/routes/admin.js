const express = require('express');
const router = express.Router();
const { verifyCredentials, getTrialProgress, getParticipantHealthData } = require('../models/admin');

// Login route
router.post('/', async (req, res) => {
  console.log('Admin login endpoint hit');
  const { email, password, role } = req.body;

  try {
    if (!email || !password || !role) {
      console.error('Missing required fields in login request');
      return res.status(400).json({ error: 'Missing email, password, or role' });
    }

    const user = await verifyCredentials(email, password, role);
    if (user) {
      console.log('Login successful for user:', user);
      res.status(200).json({ message: 'Login successful', role: user.role });
    } else {
      console.error('Invalid credentials for email:', email);
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get participant health data
router.get('/participant/:id', async (req, res) => {
  const participantId = req.params.id;
  console.log(`Fetching health data for participant ID: ${participantId}`);
  try {
    const healthData = await getParticipantHealthData(participantId);
    console.log(`Health data retrieved for participant ID: ${participantId}`);
    res.status(200).json({ health_data: healthData.rows });
  } catch (err) {
    console.error(`Error fetching health data for participant ID ${participantId}:`, err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
