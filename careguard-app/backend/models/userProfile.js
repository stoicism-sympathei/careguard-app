// server.js or routes/userProfile.js
const express = require('express');
const router = express.Router();
const UserProfile = require('../models/userProfile'); // Import your Mongoose model

// Create a new user profile
router.post('/', async (req, res) => {
  try {
    const userProfile = await UserProfile.create(req.body);
    res.status(201).json(userProfile);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create user profile' });
  }
});

// Retrieve user profile by ID
router.get('/:id', async (req, res) => {
  try {
    const userProfile = await UserProfile.findById(req.params.id);
    if (!userProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(400).json({ error: 'Unable to retrieve user profile' });
  }
});

// Update user profile by ID
router.put('/:id', async (req, res) => {
  try {
    const userProfile = await UserProfile.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated user profile
    });
    if (!userProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(400).json({ error: 'Unable to update user profile' });
  }
});

// Delete user profile by ID
router.delete('/:id', async (req, res) => {
  try {
    const userProfile = await UserProfile.findByIdAndRemove(req.params.id);
    if (!userProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }
    res.status(204).end(); // No content response
  } catch (error) {
    res.status(400).json({ error: 'Unable to delete user profile' });
  }
});

module.exports = router;

