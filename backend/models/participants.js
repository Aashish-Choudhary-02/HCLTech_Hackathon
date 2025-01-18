const pool = require('../db');

const registerParticipant = async (personalInfo, contactInfo) => {
  const { full_name, date_of_birth, gender, marital_status } = personalInfo;
  const { email, street_address, city, state_province, zip_postal_code, country, phone_number } =
    contactInfo;

  const personalQuery = `
    INSERT INTO personal_information (full_name, date_of_birth, gender, marital_status) 
    VALUES ($1, $2, $3, $4) RETURNING id
  `;
  const personalResult = await pool.query(personalQuery, [
    full_name,
    date_of_birth,
    gender,
    marital_status,
  ]);
  const participantId = personalResult.rows[0].id;

  const contactQuery = `
    INSERT INTO contact_information (person_id, street_address, city, state_province, zip_postal_code, country, phone_number, email_address) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `;
  await pool.query(contactQuery, [
    participantId,
    street_address,
    city,
    state_province,
    zip_postal_code,
    country,
    phone_number,
    email,
  ]);

  return participantId;
};

module.exports = { registerParticipant };
