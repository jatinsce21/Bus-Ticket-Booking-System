const addBus = require("../models/addBusModel");

const addBusses = async (req, res) => {
  try {
    const addbus = await addBus.create(req.body);
    res.status(200).json(addbus);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getBusses = async (req, res) => {
  try {
    const addbus = await addBus.find({});
    return res.status(200).json(addbus);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = { addBusses, getBusses };
