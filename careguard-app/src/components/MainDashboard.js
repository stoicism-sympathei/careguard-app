import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import logo from '../logo/my.png';
import Modal from './Modal';

function MainDashboard() {
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); // State to control the modal

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  useEffect(() => {
    // Fetch total incidents count when the component mounts
    axios
      .get('/dashboard/total-incidents')
      .then((response) => {
        if (response.status === 200) {
          setTotalIncidents(response.data.totalIncidents);
        }
      })
      .catch((error) => {
        console.error('Error fetching total incidents:', error);
      });
  }, []);

  const searchIncidents = async () => {
    try {
      // Make an API request to fetch incidents by type and location
      const response = await fetch(`/api/incidents?type=${searchQuery}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Update the searchResults state with the fetched data
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching incidents:', error);
    }
  };
  
const styles = {
    dashboardContainer: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f2f2f2',
      padding: '20px',
      minHeight: '100vh',
      backgroundImage: 'url("../images/one.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
   
    
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between', // Align header content to the right
      alignItems: 'center',
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
    horizontalNav: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    navItem: {
      margin: '0 15px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    searchInput: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginRight: '10px',
      fontSize: '14px',
      width: '200px',
    },
   searchButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '14px',
      cursor: 'pointer',
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
 
  searchButton: {
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease', // Add a transition effect
},
};

return (
    <div style={styles.dashboardContainer}>
       <header>
      <div style={styles.headerContainer}>
        <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="Logo" style={styles.dashboardLogo} />
        </Link>
        <nav>
          <ul style={styles.horizontalNav}>
            <li style={styles.navItem}>
              <Link to="/dashboard" style={styles.navLink} className="nav-link active">
                Dashboard
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/dashboard/report-incident" style={styles.navLink}>
                Report Incident
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/dashboard/profile" style={styles.navLink}>
                Profile
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/dashboard/sms-notifications" style={styles.navLink}>
                SMS Notifications
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/dashboard/real-time-updates" style={styles.navLink}>
                Real-Time Updates
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/dashboard/reporting-history" style={styles.navLink}>
                Reporting History
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/dashboard/admin-access" style={styles.navLink}>
                Admin Access
              </Link>
            </li>
          </ul>
        </nav>
     
<div style={styles.headerContainer}>
  <nav>
    <ul style={styles.horizontalNav}>
      {/* ... Your navigation links ... */}
    </ul>
  </nav>
  {/* Add a button to open the search modal */}
  <button style={styles.searchButton} onClick={openSearchModal}>
    Search
  </button>
</div>

       </div>
      <div style={styles.header}>
        <h1 style={styles.dashboardTitle}>Dashboard</h1>
        <p style={styles.dashboardSubtitle}>Your Safety, Our Priority</p>
      </div>
    </header>
      <section>
        <div style={styles.dashboardOverview}>
          {/* Total Incidents Card */}
          <div style={{ ...styles.overviewCard, borderRadius: '50%', textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '10px' }}>
              Total Incidents
            </h2>
            <p style={{ fontSize: '36px', color: '#007BFF' }}>{totalIncidents}</p>
          </div>
          {/* Remove Safety Alerts Card */}
         </div>
      </section>
      <section>
        {/* This is where child routes will be rendered */}
        <Outlet />
      </section>
      <footer>{/* Add footer content and links */}</footer>

	  {/* Search Modal */}
      <Modal isOpen={isSearchModalOpen} onRequestClose={closeSearchModal}>

	<Modal
  isOpen={isSearchModalOpen}
  onRequestClose={closeSearchModal}
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  searchIncidents={searchIncidents}
  searchResults={searchResults}
  styles={styles} // Pass the styles object to the Modal component
></Modal>

        <input
          type="text"
          placeholder="Search..."
          style={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" style={styles.searchButton} onClick={searchIncidents}>
          Search
        </button>
      </Modal>
    </div>
  );
}

export default MainDashboard;
