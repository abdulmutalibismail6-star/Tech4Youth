const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  console.log('--> REGISTER ROUTE HIT! Request body:', req.body);
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      console.log('--> Validation failed: Missing fields');
      return res.status(400).json({ message: 'Please fill in all fields.' });
    }

    console.log('--> Checking if user already exists for:', email);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('--> User already exists!');
      return res.status(400).json({ message: 'An account with this email already exists.' });
    }

    console.log('--> Hashing password...');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('--> Creating new user instance...');
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    console.log('--> Saving user to MongoDB Atlas...');
    await newUser.save();
    console.log('--> User saved successfully!');

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(201).json({
      message: 'Account created successfully!',
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('❌ CRITICAL REGISTER ERROR:', error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  console.log('--> LOGIN ROUTE HIT! Request body:', req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter both email and password.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('❌ CRITICAL LOGIN ERROR:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

module.exports = router;