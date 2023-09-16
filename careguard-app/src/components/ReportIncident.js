import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ReportIncident.css'; // Import your CSS file for this page
import logo from '../logo/my.png'; // Your app logo

function ReportIncident() {
  // Define state variables for form inputs
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('low');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submit the incident report
    // You can add your submission logic here
  };

  return (
    <div className="report-incident-container">
      <header>
        <div className="nav-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <nav>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            {/* Add other navigation links */}
          </nav>
        </div>
        <h1 className="report-incident-title">Report Incident</h1>
      </header>
      <section>
        <form className="incident-form" onSubmit={handleSubmit}>
          {/* Date and Time Input */}
          <label htmlFor="date">Date and Time</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {/* Location Input */}
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          {/* Incident Type Input */}
          <label htmlFor="incidentType">Incident Type</label>
          <input
            type="text"
            id="incidentType"
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            required
          />

          {/* Description Input */}
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          ></textarea>

          {/* Severity Level Input */}
          <label>Severity Level</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Contact Information Inputs */}
          <label htmlFor="contactName">Your Name</label>
          <input
            type="text"
            id="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
          />

          <label htmlFor="contactPhone">Phone Number</label>
          <input
            type="tel"
            id="contactPhone"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            required
          />

          <label htmlFor="contactEmail">Email</label>
          <input
            type="email"
            id="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>
      <footer>
        {/* Add footer content and links */}
      </footer>
    </div>
  );
}

export default ReportIncident;

