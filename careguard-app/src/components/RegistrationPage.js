import React, { useState } from 'react';
import '../Styles/RegistrationPage.css'; // Import your CSS for styling

function RegistrationPage() {
  const [formData, setFormData] = useState({
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        // Registration successful, redirect to login or dashboard
        // You can use React Router's history to redirect
        history.push('/login'); // Replace 'history' with your routing mechanism
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
  };

  // Implement form submission and registration logic here

  return (
    <div className="registration-page">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for name, email, password, etc. */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {/* Add more input fields as needed */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegistrationPage;

