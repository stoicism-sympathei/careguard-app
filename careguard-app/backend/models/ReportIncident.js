import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReportIncident() {
  const [incidents, setIncidents] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    // Function to fetch incidents by type
    const fetchIncidentsByType = async () => {
      try {
        const response = await axios.get(`/api/incidents?type=${selectedType}`);
        if (response.status === 200) {
          setIncidents(response.data);
        }
      } catch (error) {
        console.error('Error fetching incidents:', error);
      }
    };

    // Fetch incidents when the component mounts or when selectedType changes
    fetchIncidentsByType();
  }, [selectedType]);

  return (
    <div>
      <h2>Report Incident</h2>
      {/* Your incident reporting form goes here */}
      
      <label>Select Incident Type:</label>
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">All</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        {/* Add more options for incident types */}
      </select>
      
      <h3>Incidents</h3>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>{incident.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReportIncident;

