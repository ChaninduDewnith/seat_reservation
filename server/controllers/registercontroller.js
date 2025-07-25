const User = require('../models/user');

const registerUser = async (req, res) => {
  try {
    const { id, username, userrole, email, userpassword } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({
      id,
      username,
      userrole,
      email,
      userpassword, // plain text
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { registerUser };
