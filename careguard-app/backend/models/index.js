// models/index.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  // Add other user-related fields here
});

const loginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Add other login-related fields here
});

const smsNotificationSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
  // Add other SMS notification-related fields here
});

const incidentReportSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  location: { type: String, required: true },
  incidentType: { type: String, required: true },
  description: { type: String, required: true },
  severity: { type: String, required: true },
  // Add other incident report-related fields here
});

const registrationSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  // Add other registration-related fields here
});

const User = mongoose.model('User', userSchema);
const Login = mongoose.model('Login', loginSchema);
const SMSNotification = mongoose.model('SMSNotification', smsNotificationSchema);
const IncidentReport = mongoose.model('IncidentReport', incidentReportSchema);
const Registration = mongoose.model('Registration', registrationSchema);

module.exports = {
  User,
  Login,
  SMSNotification,
  IncidentReport,
  Registration,
};

