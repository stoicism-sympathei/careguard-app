import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../logo/my.png';

function ReportIncident() {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('low');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const incidentData = {
      date,
      location,
      incidentType,
      description,
      severity,
      contactName,
      contactPhone,
      contactEmail,
    };

    axios
      .post('/api/incidents', incidentData)
      .then((response) => {
        if (response.status === 200) {
          setSubmissionStatus('Your incident report was successfully submitted.');
          setTimeout(() => {
            setSubmissionStatus('');
          }, 5000);
        } else {
          setSubmissionStatus('Sorry, there was an issue submitting your incident report.');
          setTimeout(() => {
            setSubmissionStatus('');
          }, 5000);
        }
      })
      .catch((error) => {
        console.error('Error submitting incident report:', error);
        setSubmissionStatus('Sorry, there was an issue submitting your incident report.');
        setTimeout(() => {
          setSubmissionStatus('');
        }, 5000);
      });
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#007BFF',
      padding: '20px',
      marginBottom: '20px',
    },
    logo: {
      width: '100px',
      height: 'auto',
    },
    title: {
      fontSize: '24px',
      color: '#fff',
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    select: {
      margin: '10px 0',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    },
    successMessage: {
      backgroundColor: 'green',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
      borderRadius: '5px',
      marginTop: '10px',
    },
    errorMessage: {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px',
      textAlign: 'center',
      borderRadius: '5px',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" style={styles.logo} />
          </Link>
        </div>
        <h1 style={styles.title}>Report Incident</h1>
      </header>
      <section>
        <div style={styles.formContainer}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="datetime-local"
              placeholder="Date and Time"
              style={styles.input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Location"
              style={styles.input}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Incident Type"
              style={styles.input}
              value={incidentType}
              onChange={(e) => setIncidentType(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              style={styles.input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            ></textarea>
            <select
              style={styles.select}
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <input
              type="text"
              placeholder="Your Name"
              style={styles.input}
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              style={styles.input}
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
          {/* Submission status message */}
          {submissionStatus && (
            <div
              style={
                submissionStatus.includes('successfully')
                  ? styles.successMessage
                  : styles.errorMessage
              }
            >
              {submissionStatus}
            </div>
          )}
        </div>
      </section>
      <footer>{/* Add footer content and links */}</footer>
    </div>
  );
}

export default ReportIncident;

