const mongoose = require("mongoose");

const connect = (url) => {
  mongoose.connect(url).then(console.log("DB is connected..."));
};

module.exports = connect;
