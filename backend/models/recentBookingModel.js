const mongoose = require("mongoose");

const recentBookingSchema = mongoose.Schema({
  name: String,
  journeyDate: Date,
  email: String,
  busDetails: String,
  seatDetails: String,
});

module.exports = mongoose.model("recents", recentBookingSchema);
