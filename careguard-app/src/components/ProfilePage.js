// ProfilePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ProfilePage.css'; // Import your CSS file for this page
import logo from '../logo/my.png'; // Your app logo

function ProfilePage() {
  // Define state variables for user information
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [bio, setBio] = useState('This is my bio.');

  // Handle form submission to update user information
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and update user information
    // You can add your submission logic here
  };

  return (
    <div className="profile-page-container">
      <header>
        <div className="nav-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <nav>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            {/* Add other navigation links */}
          </nav>
        </div>
        <h1 className="profile-title">User Profile</h1>
      </header>
      <section>
        <div className="user-information">
          <div className="profile-picture">
            {/* Display user's profile picture/avatar */}
            {/* Implement image upload functionality here */}
          </div>
          <div className="user-details">
            <h2>{name}</h2>
            <p>@{username}</p>
            <form className="profile-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <label htmlFor="bio">Bio/Description:</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="4"
              ></textarea>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
        {/* Add other profile features like password change, privacy settings, etc. */}
      </section>
      <footer>
        {/* Add footer content and links */}
      </footer>
    </div>
  );
}

export default ProfilePage;

