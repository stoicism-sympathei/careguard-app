import React, { useState, useEffect } from 'react';

function ReportingHistoryPage() {
  // State to manage user's reporting history
  const [reportingHistory, setReportingHistory] = useState([]);

  // Fetch reporting history when the component mounts
  useEffect(() => {
    // Replace with your API call to fetch reporting history
    // For example:
    fetch('/api/reporting-history')
      .then((response) => response.json())
      .then((data) => {
        setReportingHistory(data);
      })
      .catch((error) => {
        console.error('Error fetching reporting history:', error);
      });
  }, []);

  return (
    <div>
      <h1>Reporting History Page</h1>
      <section>
        {/* Display a list of the user's reporting history */}
        <h2>My Reporting History</h2>
        <ul>
          {reportingHistory.map((report) => (
            <li key={report.id}>
              <div>
                <strong>Report ID: {report.id}</strong>
                <p>Description: {report.description}</p>
                <p>Status: {report.status}</p>
                {/* Add more report details as needed */}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ReportingHistoryPage;

