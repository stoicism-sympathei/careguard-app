import React, { useState, useEffect } from 'react';
import '../Styles/SmsNotificationsPage.css'; // Import your CSS file for this page

function SmsNotificationsPage() {
  // Sample SMS notifications data
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch SMS notifications from an API or database
    // Update the 'notifications' state with the fetched data
    const fetchNotifications = async () => {
      try {
        // Replace with your API call to fetch SMS notifications
        const response = await fetch('/api/sms-notifications');
        if (response.ok) {
          const data = await response.json();
          setNotifications(data);
        } else {
          throw new Error('Failed to fetch notifications.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  // Sample user preferences
  const [notificationPreferences, setNotificationPreferences] = useState({
    emergencyAlerts: true,
    updates: true,
    communityMessages: true,
  });

  // Handle changes in notification preferences
  const handlePreferenceChange = (event) => {
    const { name, checked } = event.target;
    setNotificationPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: checked,
    }));
  };

  return (
    <div className="sms-notifications-container">
      <header>
        <h1 className="sms-notifications-title">SMS Notifications</h1>
      </header>
      <section>
        {/* Notification Preferences */}
        <div className="notification-preferences">
          <h2>Notification Preferences</h2>
          <label className="notification-preference-label">
            <input
              type="checkbox"
              name="emergencyAlerts"
              checked={notificationPreferences.emergencyAlerts}
              onChange={handlePreferenceChange}
            />
            Receive Emergency Alerts
          </label>
          <label className="notification-preference-label">
            <input
              type="checkbox"
              name="updates"
              checked={notificationPreferences.updates}
              onChange={handlePreferenceChange}
            />
            Receive Updates
          </label>
          <label className="notification-preference-label">
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
        <div className="notification-list">
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id}>
                <div className="notification-details">
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

export default SmsNotificationsPage;
