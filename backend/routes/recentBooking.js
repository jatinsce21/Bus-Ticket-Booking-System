const express = require("express");
const router = express.Router();
const { getRecents, addRecent } = require("../controllers/recentBooking");

router.route("/").get(getRecents).post(addRecent);

module.exports = router;
