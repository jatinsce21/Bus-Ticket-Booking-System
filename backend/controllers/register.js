const register = require("../models/registrationModel");

const getAllRegistrations = async (req, res) => {
  try {
    const Register = await register.find({});
    res.status(200).json(Register);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addRegistrations = async (req, res) => {
  try {
    const Register = await register.create(req.body);
    res.status(200).json(Register);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getRegistration = async (req, res) => {
  try {
    const { id: regID } = req.params;
    const Register = await register.findOne({ _id: regID });
    if (!Register) {
      return res.status(404).json({ msg: `No data found with id: ${regID}` });
    }
    res.status(200).json(Register);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateRegistrations = async (req, res) => {
  try {
    const { id: regID } = req.params;
    const Register = await register.findOneAndUpdate({ _id: regID }, req.body);
    if (!Register) {
      return res.status(404).json({ msg: `No data found with id: ${regID}` });
    }
    res.status(200).json(Register);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { id: regID } = req.params;
    const Register = await register.findOneAndDelete({ _id: regID });
    if (!Register) {
      return res.status(404).json({ msg: `No data found with id: ${regID}` });
    }
    res.status(200).json({ msg: `Data with id ${regID} is deleted....` });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAllRegistrations,
  getRegistration,
  addRegistrations,
  updateRegistrations,
  deleteRegistration,
};
