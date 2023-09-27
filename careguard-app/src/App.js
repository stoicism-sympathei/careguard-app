import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';
import './App.css';

// Import other components here
import MainDashboard from './components/MainDashboard'; // Update the import statement
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SmsNotificationsPage from './components/SmsNotificationsPage';
import ReportIncident from './components/ReportIncident';
import ProfilePage from './components/ProfilePage'; // Import the ProfilePage component
import RegistrationPage from './components/RegistrationPage'; // Import your RegistrationPage component
import ReportingHistoryPage from './components/ReportingHistoryPage'; // Import the ReportingHistoryPage component
import AdminAccessPage from './components/AdminAccessPage'; // Import the AdminAccessPage component
import RealTimeUpdatesPage from './components/RealTimeUpdatesPage'; // Import the RealTimeUpdatesPage component


const WrappedMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 0, lng: 0 }}>
      {/* Add your map components here */}
    </GoogleMap>
  ))
);

// Define the DashboardHome component or replace it with a valid component
const DashboardHome = () => {
  return <div>Dashboard Home Page Content</div>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<MainDashboard />}> {/* Update the element */}
          {/* Child routes for Dashboard */}
          <Route index element={<DashboardHome />} /> {/* Dashboard Home Page */}
          <Route path="report-incident" element={<ReportIncident />} />
          <Route path="profile" element={<ProfilePage />} />
	  <Route path="real-time-updates" element={<RealTimeUpdatesPage />} /> {/* Real-Time Updates Page */}
          <Route path="reporting-history" element={<ReportingHistoryPage />} /> {/* Reporting History Page */}
          <Route path="admin-access" element={<AdminAccessPage />} /> {/* Admin Access Page */}
	  <Route path="sms-notifications" element={<SmsNotificationsPage />} /> {/* SMS Notifications Page */}


       
        </Route>
        
	<Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

