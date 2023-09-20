// MainDashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../CSS/Dashboard.css';
import logo from '../logo/my.png';

function MainDashboard() {
  return (
    <div className="dashboard-container">
      <header>
        <div className="nav-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="dashboard-logo" />
          </Link>
          <nav>
            <Link to="/dashboard" className="nav-link active">
              Dashboard
            </Link>
            <Link to="/dashboard/report-incident" className="nav-link">
              Report Incident
            </Link>
            <Link to="/dashboard/profile" className="nav-link">
              Profile
            </Link>
            <Link to="/dashboard/sms-notifications" className="nav-link">
              SMS Notifications
            </Link>
            {/* Add other links as needed */}
          </nav>
        </div>
        <h1 className="dashboard-title">CareGuard</h1>
        <p className="dashboard-subtitle">Your Safety, Our Priority</p>
      </header>
      <section>
        <div className="dashboard-overview">
          {/* Add statistics and overview information */}
          <div className="overview-card">
            <h2>Total Incidents</h2>
            <p>123</p>
          </div>
          <div className="overview-card">
            <h2>Safety Alerts</h2>
            <p>5</p>
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

