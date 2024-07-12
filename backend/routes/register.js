const express = require("express");
const router = express.Router();
const {
  getAllRegistrations,
  getRegistration,
  addRegistrations,
  updateRegistrations,
  deleteRegistration,
} = require("../controllers/register");

router.route("/").get(getAllRegistrations).post(addRegistrations);
router
  .route("/:id")
  .get(getRegistration)
  .put(updateRegistrations)
  .delete(deleteRegistration);

module.exports = router;
