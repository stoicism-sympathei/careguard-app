import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/LandingPage.css';
import logo from '../logo/my.png';

function LandingPage() {
  return (
    <div className="landing-container">
      <header>
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Logo" className="logo" />
              <span className="logo-text">CareGuard</span>
            </Link>
          </div>
          <ul className="nav-links">
            <li className="nav-link-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/register" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/sms-notifications" className="nav-link">
                SMS Notifications
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="landing-content">
        <div className="landing-info">
          <h1 className="landing-title">Welcome to CareGuard</h1>
          <p className="landing-subtitle">Empowering community safety.</p>
        </div>
        <div className="landing-actions">
          <div className="landing-action">
            <h2>How It Works</h2>
            <p>Learn how CareGuard can help you and your community stay safe.</p>
          </div>
          <div className="landing-action">
            <h2>Get Started</h2>
            <p>Join CareGuard today to start making your neighborhood safer.</p>
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        {/* Add footer content and links */}
      </footer>
    </div>
  );
}

export default LandingPage;

