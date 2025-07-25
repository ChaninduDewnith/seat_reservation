const User = require('../models/user');
const bcrypt = require('bcrypt');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.userpassword);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
      message: 'Login successful',
      userrole: user.userrole,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { loginUser };
