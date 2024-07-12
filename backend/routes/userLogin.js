const express = require("express");
const authController = require("../controllers/userLogin");

const router = express.Router();

router.post("/login", authController.login);
router.get("/dashboard", authController.dashboard);
router.post("/logout", authController.logout);

module.exports = router;
