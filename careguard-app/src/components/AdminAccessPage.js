import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AdminAccessPage() {
  // State to manage admin-related data
  const [adminData, setAdminData] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);

  // Fetch admin-related data when the component mounts
  useEffect(() => {
    // Replace with your API call to fetch admin data
    // For example:
    fetch('/api/admin-data')
      .then((response) => response.json())
      .then((data) => {
        setAdminData(data);
      })
      .catch((error) => {
        console.error('Error fetching admin data:', error);
      });
  }, []);

  // Handle selecting an incident for review or management
  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident);
  };

  // Handle actions related to selected incidents (e.g., mark as resolved)
  const handleIncidentAction = (actionType) => {
    // Implement logic for incident actions
    // For example:
    if (selectedIncident) {
      if (actionType === 'resolve') {
        // Mark the incident as resolved
        // Send a request to your API to update the incident status
      } else if (actionType === 'delete') {
        // Delete the incident
        // Send a request to your API to delete the incident
      }
      // Clear the selected incident after performing the action
      setSelectedIncident(null);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    incidentList: {
      listStyle: 'none',
      padding: 0,
    },
    incidentItem: {
      marginBottom: '20px',
    },
    incidentButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '14px',
      cursor: 'pointer',
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Access Page</h1>
      <section>
        {/* Display a list of incidents for review */}
        <h2 style={styles.header}>Incident Review</h2>
        <ul style={styles.incidentList}>
          {adminData.map((incident) => (
            <li key={incident.id} style={styles.incidentItem}>
              <div>
                <strong>Incident ID: {incident.id}</strong>
                <p>Description: {incident.description}</p>
                <button
                  style={styles.incidentButton}
                  onClick={() => handleSelectIncident(incident)}
                >
                  Review
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        {/* Display details and actions for the selected incident */}
        {selectedIncident && (
          <div>
            <h2 style={styles.header}>Selected Incident</h2>
            <p>Incident ID: {selectedIncident.id}</p>
            <p>Description: {selectedIncident.description}</p>
            <button
              style={styles.incidentButton}
              onClick={() => handleIncidentAction('resolve')}
            >
              Mark as Resolved
            </button>
            <button
              style={styles.incidentButton}
              onClick={() => handleIncidentAction('delete')}
            >
              Delete
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default AdminAccessPage;

