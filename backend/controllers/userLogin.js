const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const Register = require("../models/registrationModel");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await Register.findOne({ email });
  if (!user) {
    return res.status(401).json("Invalid email or password");
  }

  // Check password
  const isMatch = await Register.findOne({ password });
  if (!isMatch) {
    return res.status(401).json("Invalid email or password");
  }

  // Set session
  req.session.userId = user._id;
  res.json({ msg: `Login Successfull` });
};

exports.dashboard = (req, res) => {
  if (!req.session.userId) {
    return res.status(401).js("You need to log in first");
  }

  res.send("Welcome to the dashboard, user");
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to log out");
    }

    res.send("Logout successful");
  });
};
