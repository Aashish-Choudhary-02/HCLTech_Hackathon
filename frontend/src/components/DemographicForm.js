import React from "react";
import Navbar from "./navbar";

const DemographicForm = (props) => {
  return (
    <>
    <Navbar title = 'CTPM' mode = {props.mode} toggleMode = {props.toggleMode} role = 'CRC'/>
    <div className="container mt-4">
      <h1 className="text-center mb-4">Demographic Data of Participants</h1>
      <form>
        {/* Personal Information */}
        <div className="mb-4">
          <h3>1. Personal Information</h3>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select className="form-select" id="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
            <select className="form-select" id="maritalStatus">
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <h3>2. Contact Information</h3>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control mb-2" id="address" placeholder="Street Address" />
            <input type="text" className="form-control mb-2" placeholder="City" />
            <input type="text" className="form-control mb-2" placeholder="State/Province" />
            <input type="text" className="form-control mb-2" placeholder="ZIP/Postal Code" />
            <input type="text" className="form-control" placeholder="Country" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email address" />
          </div>
        </div>

        {/* Socioeconomic Data */}
        <div className="mb-4">
          <h3>3. Socioeconomic Data</h3>
          <div className="mb-3">
            <label htmlFor="employmentStatus" className="form-label">Employment Status</label>
            <select className="form-select" id="employmentStatus">
              <option value="">Select Employment Status</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Retired">Retired</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="occupation" className="form-label">Occupation/Job Title</label>
            <input type="text" className="form-control" id="occupation" placeholder="Enter occupation or job title" />
          </div>
          <div className="mb-3">
            <label htmlFor="educationLevel" className="form-label">Education Level</label>
            <select className="form-select" id="educationLevel">
              <option value="">Select Education Level</option>
              <option value="No Formal Education">No Formal Education</option>
              <option value="High School">High School</option>
              <option value="Bachelor’s Degree">Bachelor’s Degree</option>
              <option value="Master’s Degree">Master’s Degree</option>
              <option value="Doctorate">Doctorate</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Cultural/Ethnic Background */}
        <div className="mb-4">
          <h3>4. Cultural/Ethnic Background</h3>
          <div className="mb-3">
            <label htmlFor="ethnicity" className="form-label">Race/Ethnicity</label>
            <select className="form-select" id="ethnicity">
              <option value="">Select Ethnicity</option>
              <option value="White">White</option>
              <option value="Black/African American">Black/African American</option>
              <option value="Asian">Asian</option>
              <option value="Hispanic/Latino">Hispanic/Latino</option>
              <option value="Native American">Native American</option>
              <option value="Pacific Islander">Pacific Islander</option>
              <option value="Mixed">Mixed</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="nationality" className="form-label">Nationality/Citizenship</label>
            <input type="text" className="form-control" id="nationality" placeholder="Enter nationality or citizenship" />
          </div>
          <div className="mb-3">
            <label htmlFor="language" className="form-label">Primary Language(s)</label>
            <input type="text" className="form-control" id="language" placeholder="Enter primary language(s)" />
          </div>
        </div>

        {/* Health & Lifestyle */}
        <div className="mb-4">
          <h3>5. Health & Lifestyle (Optional)</h3>
          <div className="mb-3">
            <label htmlFor="healthStatus" className="form-label">Health Status</label>
            <textarea
              className="form-control"
              id="healthStatus"
              rows="3"
              placeholder="Describe chronic conditions, disabilities, etc."
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="habits" className="form-label">Smoking/Alcohol/Drug Use</label>
            <textarea
              className="form-control"
              id="habits"
              rows="2"
              placeholder="Describe smoking, alcohol, or drug use"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="physicalActivity" className="form-label">Physical Activity Level</label>
            <textarea
              className="form-control"
              id="physicalActivity"
              rows="2"
              placeholder="Describe physical activity level"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default DemographicForm;
