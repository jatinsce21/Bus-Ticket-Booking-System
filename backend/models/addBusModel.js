const mongoose = require("mongoose");

const addBusSchema = mongoose.Schema({
  name: {
    type: String,
  },
  routeFrom: {
    type: String,
  },
  routeTo: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  image: {
    name: String,
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("addBus", addBusSchema);
