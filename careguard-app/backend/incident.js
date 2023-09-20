const mongoose = require('mongoose');

// Define the Incident schema
const incidentSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String, // You can use this field to distinguish between different types of incidents (e.g., 'safety', 'security', etc.)
  // Add other fields as needed
});

// Create and export the Incident model
module.exports = mongoose.model('Incident', incidentSchema);

