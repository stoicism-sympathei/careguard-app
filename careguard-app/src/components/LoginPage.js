import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend login endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful, redirect to the dashboard
        navigate('/dashboard');
      } else {
        // Login failed, handle errors
        const data = await response.json();
        setErrorMessage(data.message); // Set the error message from the response
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or other exceptions
    }
  };

  const styles = {
    loginPage: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to bottom, #808080, #CCCCCC)',
    },
    loginForm: {
      width: '100%',
      maxWidth: '400px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    header: {
      fontSize: '28px',
      color: '#ff6b6b',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    errorMessage: {
      color: '#ff6b6b',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontSize: '18px',
      marginBottom: '10px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '15px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      backgroundColor: '#f4f4f4',
      boxSizing: 'border-box',
    },
    inputFocus: {
      backgroundColor: '#fff',
    },
    submitButton: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#ff6b6b',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    submitButtonHover: {
      backgroundColor: '#ff5252',
    },
  };

  return (
    <div style={styles.loginPage}>
      <h2 style={styles.header}>Login</h2>
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} style={styles.loginForm}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
	    placeholder="Enter your email"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            placeholder="Enter your password"
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
