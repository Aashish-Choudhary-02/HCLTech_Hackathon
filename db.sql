CREATE DATABASE clinical_trial_db1;

USE clinical_trial_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,         
    role ENUM('CRC', 'PI') NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,        
    password VARCHAR(255) NOT NULL
);


CREATE TABLE personal_information(
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(40) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Non-Binary') NOT NULL,
    marital_status ENUM('Single', 'Married', 'Divorced', 'Widowed', 'Other') NOT NULL
);

CREATE TABLE contact_information (
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    street_address VARCHAR(100) NOT NULL,
    city VARCHAR(20) NOT NULL,
    state_province VARCHAR(20),
    zip_postal_code VARCHAR(8),
    country VARCHAR(20) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email_address VARCHAR(30) UNIQUE NOT NULL,
    FOREIGN KEY (person_id) REFERENCES personal_information(id) ON DELETE CASCADE
);

CREATE TABLE socioeconomic_data(
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    employment_status ENUM('Employed', 'Unemployed', 'Retired', 'Student', 'Other') NOT NULL,
    occupation_job_title VARCHAR(20),
    education_level ENUM('No Formal Education', 'High School', 'Bachelor’s Degree', 'Master’s Degree', 'Doctorate', 'Other') NOT NULL,
    FOREIGN KEY (person_id) REFERENCES personal_information(id) ON DELETE CASCADE
);

CREATE TABLE cultural_ethnic_background(
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    race_ethnicity ENUM(
        'White', 
        'Black/African American', 
        'Asian', 
        'Hispanic/Latino', 
        'Native American', 
        'Pacific Islander', 
        'Mixed', 
        'Other'
    ) NOT NULL,
    nationality VARCHAR(20) NOT NULL,
    primary_languages VARCHAR(10) NOT NULL,
    FOREIGN KEY (person_id) REFERENCES personal_information(id) ON DELETE CASCADE
);

CREATE TABLE health_lifestyle (
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    health_status TEXT,
    smoking_alcohol_drug_use VARCHAR(25),
    physical_activity_level VARCHAR(50),
    FOREIGN KEY (person_id) REFERENCES personal_information(id) ON DELETE CASCADE
);


CREATE TABLE  target_participate(
trial_name VARCHAR(50),
person_id INT NOT NULL,
FOREIGN KEY (person_id) REFERENCES personal_information(id) ON DELETE CASCADE
);


CREATE TABLE health_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    person_id INT NOT NULL,
    trial_name VARCHAR(50),
    heart_rate INT,
    blood_pressure_systolic INT,
    blood_pressure_diastolic INT,
    respiratory_rate INT,
    body_temperature DECIMAL(4, 1),
    oxygen_saturation DECIMAL(5, 2),
    weight DECIMAL(6, 2),
    height DECIMAL(6, 2),
    ecg_report TEXT,
    blood_glucose_level DECIMAL(5, 2),
    urine_output INT,
    record_date DATE NOT NULL,
    FOREIGN KEY (person_id) REFERENCES personal_information(id) ON DELETE CASCADE
);


