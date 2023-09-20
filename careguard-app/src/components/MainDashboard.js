import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import '../CSS/Dashboard.css'; // Import your global dashboard CSS file
import logo from '../logo/my.png';

function MainDashboard() {
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [safetyAlerts, setSafetyAlerts] = useState(0);

 useEffect(() => {
    // Fetch total incidents count when the component mounts
    axios
      .get('/dashboard/total-incidents') // Use the correct endpoint
      .then((response) => {
        if (response.status === 200) {
          setTotalIncidents(response.data.totalIncidents);
        }
      })
      .catch((error) => {
        console.error('Error fetching total incidents:', error);
      });

    // Fetch safety alerts count when the component mounts
    axios
      .get('/dashboard/safety-alerts') // Use the correct endpoint
      .then((response) => {
        if (response.status === 200) {
          setSafetyAlerts(response.data.safetyAlerts);
        }
      })
      .catch((error) => {
        console.error('Error fetching safety alerts:', error);
      });
  }, []);

  const styles = {
    dashboardContainer: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f2f2f2',
      padding: '20px',
      minHeight: '100vh',
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end', // Align header content to the right
      justifyContent: 'flex-end',
      backgroundColor: '#007BFF', // Change the header background color
      padding: '20px',
      marginBottom: '20px',
    },
    logoLink: {
      textDecoration: 'none',
      color: '#fff', // Change logo text color to white
    },
    dashboardLogo: {
      width: '100px',
      height: 'auto',
    },
    nav: {
      display: 'flex',
      flexDirection: 'column', // Stack links vertically
    },
    navLink: {
      textDecoration: 'none',
      color: '#fff', // Change link text color to white
      margin: '10px 0', // Add vertical spacing between links
      padding: '10px 20px', // Add padding to links for better touch targets
      borderRadius: '5px', // Add rounded corners to links
      backgroundColor: 'rgba(0, 123, 255, 0.2)', // Add a background color on hover
    },
    navLinkActive: {
      fontWeight: 'bold',
    },
    header: {
      textAlign: 'left', // Align text to the left
      marginBottom: '20px',
    },
    dashboardTitle: {
      fontSize: '36px',
      color: '#333',
    },
    dashboardSubtitle: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '20px',
    },
    dashboardOverview: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    overviewCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: '45%',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '10px',
    },
    cardValue: {
      fontSize: '36px',
      color: '#007BFF',
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <header>
        <div style={styles.headerContainer}>
          <Link to="/" style={styles.logoLink}>
            <img src={logo} alt="Logo" style={styles.dashboardLogo} />
          </Link>
          <nav style={styles.nav}>
            <Link to="/dashboard" style={styles.navLink} className="nav-link active">
              Dashboard
            </Link>
            <Link to="/dashboard/report-incident" style={styles.navLink}>
              Report Incident
            </Link>
            <Link to="/dashboard/profile" style={styles.navLink}>
              Profile
            </Link>
            <Link to="/dashboard/sms-notifications" style={styles.navLink}>
              SMS Notifications
            </Link>
            {/* Add other links as needed */}
          </nav>
        </div>
        <div style={styles.header}>
          <h1 style={styles.dashboardTitle}>Dashboard</h1>
          <p style={styles.dashboardSubtitle}>Your Safety, Our Priority</p>
        </div>
      </header>
      <section>
        <div style={styles.dashboardOverview}>
          {/* Total Incidents Card */}
          <div style={styles.overviewCard}>
            <h2 style={styles.cardTitle}>Total Incidents</h2>
            <p style={styles.cardValue}>{totalIncidents}</p>
          </div>
          {/* Safety Alerts Card */}
          <div style={styles.overviewCard}>
            <h2 style={styles.cardTitle}>Safety Alerts</h2>
            <p style={styles.cardValue}>{safetyAlerts}</p>
          </div>
          {/* Add more overview cards as needed */}
        </div>
      </section>
      <section>
        {/* This is where child routes will be rendered */}
        <Outlet />
      </section>
      <footer>{/* Add footer content and links */}</footer>
    </div>
  );
}

export default MainDashboard;

