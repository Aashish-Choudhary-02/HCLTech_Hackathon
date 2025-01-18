const express = require('express');
const router = express.Router();
const { createTrial, filterParticipants, addTargetParticipants } = require('../models/target');
const { sendMail } = require('../utils/mailer');

router.post('/schedule', async (req, res) => {
  console.log('CRC trial scheduling endpoint hit');
  const { trial_name, filters, sendEmail } = req.body;

  try {
    const trialId = await createTrial(trial_name);
    console.log(`Trial created with ID: ${trialId}, Name: ${trial_name}`);

    const participants = await filterParticipants(filters);
    console.log(`Filtered participants:`, participants);

    await addTargetParticipants(trial_name, participants);

    // Step 4: Send emails (if requested)
    if (sendEmail) {
      console.log('Sending emails to participants...');
      for (const participant of participants) {
        await sendMail(
          participant.email_address,
          'Trial Scheduled',
          `You have been scheduled for trial: ${trial_name}`
        );
        console.log(`Email sent to ${participant.email_address}`);
      }
    }

    res.status(201).json({
      message: 'Trial scheduled successfully',
      trialId,
      participantsCount: participants.length,
    });
  } catch (err) {
    console.error('Error scheduling trial:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
