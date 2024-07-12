const bcrypt = require("bcryptjs");
const Agent = require("../models/travelLoginModel");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Find agent by email
  const agent = await Agent.findOne({ email });
  if (!agent) {
    return res.status(401).json("Invalid emai or password");
  }

  // Check password
  const isMatch = await Agent.findOne({ password });
  if (!isMatch) {
    return res.status(401).json("Invalid email or password");
  }

  // Set session
  req.session.agentId = agent._id;
  res.json("Login successful");
};

exports.dashboard = (req, res) => {
  if (!req.session.agentId) {
    return res.status(401).send("You need to log in first");
  }

  res.send("Welcome to the dashboard, travel agent");
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to log out");
    }

    res.send("Logout successful");
  });
};
