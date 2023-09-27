import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SmsNotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [notificationPreferences, setNotificationPreferences] = useState({
    emergencyAlerts: true,
    updates: true,
    communityMessages: true,
  });

  const fetchNotifications = async () => {
    try {
      // Replace with your API call to fetch SMS notifications
      const response = await fetch('/api/sms-notifications');
      if (response.ok) {
        const data = await response.json();
        setNotifications(data.notifications);
        setNotificationPreferences(data.preferences);
      } else {
        throw new Error('Failed to fetch notifications.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handlePreferenceChange = (event) => {
    const { name, checked } = event.target;
    setNotificationPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: checked,
    }));
  };

  return (
    <div style={styles.smsNotificationsContainer}>
      <header>
        <h1 style={styles.smsNotificationsTitle}>SMS Notifications</h1>
      </header>
      <section>
        {/* Notification Preferences */}
        <div style={styles.notificationPreferences}>
          <h2>Notification Preferences</h2>
          <label style={styles.notificationPreferenceLabel}>
            <input
              type="checkbox"
              name="emergencyAlerts"
              checked={notificationPreferences.emergencyAlerts}
              onChange={handlePreferenceChange}
            />
            Receive Emergency Alerts
          </label>
          <label style={styles.notificationPreferenceLabel}>
            <input
              type="checkbox"
              name="updates"
              checked={notificationPreferences.updates}
              onChange={handlePreferenceChange}
            />
            Receive Updates
          </label>
          <label style={styles.notificationPreferenceLabel}>
            <input
              type="checkbox"
              name="communityMessages"
              checked={notificationPreferences.communityMessages}
              onChange={handlePreferenceChange}
            />
            Receive Community Messages
          </label>
        </div>

        {/* List of Notifications */}
        <div style={styles.notificationList}>
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id}>
                <div style={styles.notificationDetails}>
                  <strong>From: {notification.sender}</strong>
                  <p>{notification.message}</p>
                  <small>Received on: {notification.timestamp}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer>
        {/* Add footer content and links */}
      </footer>
    </div>
  );
}

const styles = {
  smsNotificationsContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  smsNotificationsTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  notificationPreferences: {
    marginBottom: '20px',
  },
  notificationPreferenceLabel: {
    display: 'block',
    marginBottom: '10px',
    fontSize: '16px',
  },
  notificationList: {
    borderTop: '1px solid #ccc',
    paddingTop: '20px',
  },
  notificationDetails: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
  },
};

export default SmsNotificationsPage;

