const express = require('express');
const router = express.Router();
const { registerParticipant } = require('../models/participants');
const { addHealthData } = require('../models/health');
const { createTrial, addTargetParticipants } = require('../models/target');
const { sendMail } = require('../utils/mailer');

// Register Participant
router.post('/', async (req, res) => {
  try {
    const participantId = await registerParticipant(req.body.personalInfo, req.body.contactInfo);
    res.status(201).json({ message: 'Participant registered', participantId });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add Health Data
router.post('/health', async (req, res) => {
  try {
    await addHealthData(req.body);
    res.status(201).json({ message: 'Health data recorded successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Schedule Trial
router.post('/schedule', async (req, res) => {
  try {
    const { trial_name, filters, sendEmail } = req.body;

    const trialId = await createTrial(trial_name);
    const participants = await addTargetParticipants(trial_name, filters);

    if (sendEmail) {
      for (const participant of participants) {
        await sendMail(participant.email_address, 'Trial Scheduled', `Trial: ${trial_name}`);
      }
    }

    res.status(201).json({ message: 'Trial scheduled successfully', trialId });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
