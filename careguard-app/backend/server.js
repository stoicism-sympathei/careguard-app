const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Sample User model (replace with your actual User model)
const User = mongoose.model('User', {
  email: String,
  password: String,
  // Add other user fields as needed
});

// Sample Incident model (replace with your actual Incident model)
const Incident = require('./incident');

// Registration API route
app.post('/api/register', async (req, res) => {
  try {
    // Extract registration data from the request body
    const { name, email, password } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Respond with a success message
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    // Handle errors and respond with an error message
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
});

// Login API route
app.post('/api/login', async (req, res) => {
  try {
    // Extract login data from the request body
    const { email, password } = req.body;

    // Find a user with the provided email in your database
    const user = await User.findOne({ email });

    if (!user) {
      // If no user with the provided email is found, respond with an error
      res.status(401).json({ success: false, message: 'Login failed. User not found.' });
      return;
    }

    // Check if the provided password matches the user's hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      // If the password is valid, respond with a success message and user data
      res.json({ success: true, message: 'Login successful', user: user.toJSON() });
    } else {
      // If the password is invalid, respond with an error
      res.status(401).json({ success: false, message: 'Login failed. Invalid password.' });
    }
  } catch (error) {
    // Handle errors and respond with an error message
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

// Define a route to get total incidents count
app.get('/dashboard/total-incidents', async (req, res) => {
  try {
    // Implement logic to fetch total incidents data from the database
    const totalIncidents = await Incident.countDocuments();

    // Return the data as JSON
    res.json({ totalIncidents });
  } catch (error) {
    // Handle errors and respond with an error message
    console.error('Error fetching total incidents:', error);
    res.status(500).json({ success: false, message: 'Error fetching total incidents' });
  }
});

// Define a route to get safety alerts
app.get('/dashboard/safety-alerts', async (req, res) => {
  try {
    // Implement logic to fetch safety alerts data from the database
    const safetyAlerts = await Incident.countDocuments({ type: 'safety' });

    // Return the data as JSON
    res.json({ safetyAlerts });
  } catch (error) {
    // Handle errors and respond with an error message
    console.error('Error fetching safety alerts:', error);
    res.status(500).json({ success: false, message: 'Error fetching safety alerts' });
  }
});

// Define a route to submit an incident report
app.post('/api/incidents', async (req, res) => {
  try {
    // Extract incident report data from the request body
    const { title, description, type } = req.body;

    // Create a new incident in the database
    const newIncident = new Incident({ title, description, type });
    await newIncident.save();

    // Fetch the total number of incidents from the database
    const totalIncidents = await Incident.countDocuments();

    // Respond with the total number of incidents and a success message
    res.status(200).json({
      success: true,
      message: 'Incident report submitted successfully',
      totalIncidents: totalIncidents, // Include the total incidents count in the response
    });
  } catch (error) {
    // Handle errors and respond with an error message
    console.error('Incident report submission error:', error);
    res.status(500).json({ success: false, message: 'Incident report submission failed' });
  }
});

// Backend API route for deleting an incident report
app.delete('/api/incidents/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Use the incident ID to delete the incident report from your database
    await Incident.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Incident report deleted successfully' });
  } catch (error) {
    console.error('Error deleting incident report:', error);
    res.status(500).json({ success: false, message: 'Error deleting incident report' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

