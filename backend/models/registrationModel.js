const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  Gender: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("register", registrationSchema);
