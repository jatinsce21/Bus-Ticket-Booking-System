const recent = require("../models/recentBookingModel");

const addRecent = async (req, res) => {
  try {
    const Recent = await recent.create(req.body);
    return res.status(200).json(Recent);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getRecents = async (req, res) => {
  try {
    const Recent = await recent.find({});
    return res.status(200).json(Recent);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = { addRecent, getRecents };
