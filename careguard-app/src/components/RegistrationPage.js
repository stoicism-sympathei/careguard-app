import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

   // Add error state for each input field
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formIsValid = true;

    if (!formData.name) {
      setErrors({ ...errors, name: 'Name is required' });
      formIsValid = false;
    }

    if (!formData.email) {
      setErrors({ ...errors, email: 'Email is required' });
      formIsValid = false;
    }

    if (!formData.password) {
      setErrors({ ...errors, password: 'Password is required' });
      formIsValid = false;
    }

    if (formIsValid) {
      try {
        // Send a POST request to your backend registration endpoint
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Registration successful, redirect to login
          navigate('/login');
        } else {
          // Registration failed, handle errors
          const data = await response.json();
          console.error('Registration failed:', data.error);
          // Display an error message to the user
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle network errors or other exceptions
      }
    }
  };
  
  const styles = {
    registrationPage: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#cccccc',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      backgroundImage: 'url("../images/Registeration.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '100%',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    errorMessage: {
      color: '#ff0000',
      fontSize: '14px',
      textAlign: 'center',
      marginTop: '10px',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#0056b3',
    },
  };

  return (
    <div style={styles.registrationPage}>
      <h2 style={styles.heading}>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {/* Display the error message for the 'name' field */}
        <div style={styles.errorMessage}>{errors.name}</div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {/* Display the error message for the 'email' field */}
        <div style={styles.errorMessage}>{errors.email}</div>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        {/* Display the error message for the 'password' field */}
        <div style={styles.errorMessage}>{errors.password}</div>

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default RegistrationPage;
