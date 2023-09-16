import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';
import './App.css';

// Import other components here
import DashboardComponent from './components/Dashboard'; // Renamed to DashboardComponent
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import SmsNotificationsPage from './components/SmsNotificationsPage';
import ReportIncident from './components/ReportIncident';
import ProfilePage from './components/ProfilePage'; // Import the ProfilePage component

const WrappedMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 0, lng: 0 }}>
      {/* Add your map components here */}
    </GoogleMap>
  ))
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard/*" element={<DashboardComponent />}>
          {/* Add child routes for Dashboard */}
          <Route path="report-incident" element={<ReportIncident />} />
          <Route path="profile" element={<ProfilePage />} />
          {/* Add other child routes as needed */}
        </Route>
        <Route path="/sms-notifications" element={<SmsNotificationsPage />} /> {/* Add a route for SMS notifications */}
      </Routes>
    </Router>
  );
}

export default App;

