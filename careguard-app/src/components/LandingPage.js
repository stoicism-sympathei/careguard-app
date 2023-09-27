import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../logo/my.png';
import backgroundImage from '../images/one.jpg';

const landingContainerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
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
  background: 'transparent',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: 'none',
  maxWidth: '800px',
  margin: '2rem auto',
  color: '#333',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '1rem',
  fontFamily: 'EB Garamond, sans-serif',
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

const loginLinkStyle = {
  fontWeight: 'bold', // Added bold font weight
  fontSize: '1rem',
  color: '#007bff',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  fontFamily: 'EB Garamond, sans-serif', // Added font family
  borderRadius: '50px', // Added border radius for spherical shape
  padding: '0.5rem 1rem', // Added padding for spacing
};

const landingFooterStyle = {
  marginTop: '2rem',
  textAlign: 'center',
  color: '#666',
  backgroundImage: 'url(https://images.unsplash.com/photo-1568738351265-c7065f5d4293?w=900)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const borderContentStyle = {
  '--b': '.5em',
  '--c': '3em',
  '--r': '2em',
  position: 'relative',
  margin: '1em auto',
  border: 'solid var(--b) transparent',
  padding: '1em',
  maxWidth: '23em',
  fontFamily: '1.25em ubuntu, sans-serif',
};

const borderContentBeforeStyle = {
  position: 'absolute',
  zIndex: '-1',
  inset: 'calc(-1*var(--b))',
  border: 'inherit',
  borderRadius: 'var(--r)',
  background: 'linear-gradient(orange, deeppink, purple) border-box',
  '--corner': 'conic-gradient(from -90deg at var(--c) var(--c), red 25%, #0000 0) 0 0/ calc(100% - var(--c))  calc(100% - var(--c)) border-box',
  '--inner': 'conic-gradient(red 0 0) padding-box',
  WebkitMask: 'var(--corner), var(--inner)',
  WebkitMaskComposite: 'source-out',
  mask: 'var(--corner) subtract, var(--inner)',
  content: '',
};

function LandingPage() {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <section style={landingContainerStyle}>
        <div style={borderContentStyle}>
          <div style={borderContentBeforeStyle}></div>
          <h1 style={titleStyle}>Welcome to CareGuard</h1>
          <p style={subtitleStyle}>Empowering community safety.</p>
          <div style={actionStyle}>
            {isAuthenticated ? (
              <Link to="/dashboard" style={btnLandingStyle}>
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" style={btnLandingStyle}>
                  Login
                </Link>
                <p style={actionTextStyle}>
                  <Link to="/registration" style={loginLinkStyle}>
                    Don't have an account? Sign Up
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      <section style={contentSectionStyle}>
        <div style={actionStyle}>
          <div>
            <h2 style={actionHeaderStyle}>How It Works</h2>
            <p style={actionTextStyle}>Learn how CareGuard can help you and your community stay safe.</p>
          </div>
          <div>
            <h2 style={actionHeaderStyle}>Get Started</h2>
            <p style={actionTextStyle}>Join CareGuard today to start making your neighborhood safer.</p>
          </div>
        </div>
      </section>
      {/* Additional Content */}
      <div style={contentSectionStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Content Boards */}
          <div style={borderContentStyle}>
            <div style={borderContentBeforeStyle}></div>
            <h2 style={actionHeaderStyle}>Real-time Community Alerts</h2>
            <p style={actionTextStyle}>Stay informed with real-time community alerts.</p>
          </div>
          <div style={borderContentStyle}>
            <div style={borderContentBeforeStyle}></div>
            <h2 style={actionHeaderStyle}>Emergency Response Coordination</h2>
            <p style={actionTextStyle}>Coordinate emergency responses effectively.</p>
          </div>
          <div style={borderContentStyle}>
            <div style={borderContentBeforeStyle}></div>
            <h2 style={actionHeaderStyle}>Community Safety Statistics</h2>
            <p style={actionTextStyle}>Access valuable community safety statistics.</p>
          </div>
        </div>
      </div>
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

