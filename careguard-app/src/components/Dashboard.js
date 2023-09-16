import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Styles/Dashboard.css';
import logo from '../logo/my.png';

function Dashboard() {
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
            {/* Add other links as needed */}
          </nav>
        </div>
        <h1 className="dashboard-title">Dashboard</h1>
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
        {/* Add other dashboard features such as incident reporting, safety alerts, etc. */}
        <Outlet /> {/* This is where child routes will be rendered */}
      </section>
      <footer>
        {/* Add footer content and links */}
      </footer>
    </div>
  );
}

export default Dashboard;

