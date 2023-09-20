import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../logo/my.png';
import backgroundImage from '../images/one.jpg';

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`, // Set the background image
  backgroundSize: 'cover', // Adjust the background size as needed
  backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
};

const landingContainerStyle = {
  ...backgroundStyle, // Include the background style
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
  padding: '2rem',
};


const contentSectionStyle = {
  textAlign: 'center',
  background: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px', /* Limit content width for readability */
  background: 'linear-gradient(50deg, rgba(255, 255, 255, 0.4) 12%, rgba(255, 255, 255, 0.1) 77%)',
  boxShadow: '0px 4px 24px 1px rgba(0, 0, 0, 0.28)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  color: 'white !important',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '1rem',
};

const subtitleStyle = {
  fontSize: '1.2rem',
  color: '#666',
};

const actionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const actionHeaderStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
};

const actionTextStyle = {
  fontSize: '1.1rem',
  color: '#666',
};

const btnLandingStyle = {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
};

const signupLinkStyle = {
  fontSize: '0.9rem',
  color: '#007bff',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const landingFooterStyle = {
  marginTop: '2rem',
  textAlign: 'center',
  color: '#666',
};

function LandingPage() {
  // Simulate user authentication (replace with actual logic)
  const isAuthenticated = false; // Change to true if the user is authenticated

  // If the user is authenticated, redirect to the dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div style={landingContainerStyle}>
      <section style={contentSectionStyle}>
        <div>
          <h1 style={titleStyle}>Welcome to CareGuard</h1>
          <p style={subtitleStyle}>Empowering community safety.</p>
        </div>
        <div style={actionStyle}>
          <div>
            <h2 style={actionHeaderStyle}>How It Works</h2>
            <p style={actionTextStyle}>Learn how CareGuard can help you and your community stay safe.</p>
          </div>
          <div>
            <h2 style={actionHeaderStyle}>Get Started</h2>
            <p style={actionTextStyle}>Join CareGuard today to start making your neighborhood safer.</p>
            {isAuthenticated ? (
              <Link to="/dashboard" style={btnLandingStyle}>
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" style={btnLandingStyle}>
                  Login
                </Link>
                <p>
                  Don't have an account?{' '}
                  <Link to="/registration" styles={btnLandingStyle['signup-link']}>
                  Sign Up
                 </Link>

                </p>
              </>
            )}
          </div>
        </div>
        {/* Additional Content */}
        <div>
          {/* Add your content here */}
          <div>
            <h2 style={actionHeaderStyle}>Additional Content</h2>
            <p style={actionTextStyle}>Real-time community alerts</p>
            <p style={actionTextStyle}>Emergency response coordination</p>
            <p style={actionTextStyle}>Community safety statistics</p>
          </div>
        </div>
      </section>
      <footer style={landingFooterStyle}>
        <div>
          <span>&copy; 2023 CareGuard</span>
          <span>
            Designed by <a href="#">Moges Amane</a>
          </span>
          {/* About Us Content */}
          <div>
            <h3 style={actionHeaderStyle}>About Us</h3>
            <p style={actionTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet auctor bibendum.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

