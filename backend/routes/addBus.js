const express = require("express");
const router = express.Router();
const { addBusses, getBusses } = require("../controllers/addBus");

router.route("/").post(addBusses).get(getBusses);

module.exports = router;
