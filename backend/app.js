const express = require("express");
const session = require("express-session");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const connect = require("./db/connect");
const registerRoutes = require("./routes/register");
const addBusRoutes = require("./routes/addBus");
const recentBookingRoutes = require("./routes/recentBooking");
const travelLoginRoutes = require("./routes/travelLogin");
const userLoginRoutes = require("./routes/userLogin");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // 1 minute for testing purposes
  })
);

app.use("/register", registerRoutes);
app.use("/addbus", addBusRoutes);
app.use("/recents", recentBookingRoutes);
app.use("/agent", travelLoginRoutes);
app.use("/login", userLoginRoutes);

const start = async () => {
  try {
    connect(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is connected to port: ${PORT}`));
  } catch (error) {}
};

start();
