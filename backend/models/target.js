const pool = require('../db');

// Create a new trial
const createTrial = async (trial_name) => {
  const query = `
    INSERT INTO trials (trial_name)
    VALUES ($1) RETURNING id
  `;
  const result = await pool.query(query, [trial_name]);
  return result.rows[0].id;
};

// Filter participants based on demographic/health data
const filterParticipants = async (filters) => {
  const { age_min, age_max, gender } = filters;

  const query = `
    SELECT 
      pi.id AS person_id,
      pi.full_name,
      EXTRACT(YEAR FROM AGE(pi.date_of_birth)) AS age,
      pi.gender,
      ci.email_address
    FROM 
      personal_information pi
    INNER JOIN 
      contact_information ci 
    ON 
      pi.id = ci.person_id
    WHERE 
      EXTRACT(YEAR FROM AGE(pi.date_of_birth)) BETWEEN $1 AND $2
      AND ($3 IS NULL OR pi.gender = $3)
  `;
  const result = await pool.query(query, [age_min, age_max, gender || null]);
  return result.rows;
};

// Add participants to a trial
const addTargetParticipants = async (trial_name, participants) => {
  const insertQuery = `
    INSERT INTO target_participate (trial_name, person_id)
    VALUES ($1, $2)
    ON CONFLICT DO NOTHING
  `;

  for (const participant of participants) {
    await pool.query(insertQuery, [trial_name, participant.person_id]);
  }

  return participants;
};

module.exports = { createTrial, filterParticipants, addTargetParticipants };
