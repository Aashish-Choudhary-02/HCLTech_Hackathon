const express = require('express');
const router = express.Router();
const { getTrialProgress, getParticipantHealthData } = require('../models/admin');

// View Trial Progress
router.get('/', async (req, res) => {
  try {
    const trials = await getTrialProgress();
    res.status(200).json({ trials: trials.rows });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// View Participant Health Data
router.get('/participant/:id', async (req, res) => {
  try {
    const healthData = await getParticipantHealthData(req.params.id);
    res.status(200).json({ health_data: healthData.rows });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
