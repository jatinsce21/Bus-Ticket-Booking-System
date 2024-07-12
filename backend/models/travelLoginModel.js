const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
