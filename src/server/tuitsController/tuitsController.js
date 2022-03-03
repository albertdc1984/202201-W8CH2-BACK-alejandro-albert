const Tuit = require("../../database/models/Tuit");
const User = require("../../database/models/User");

const getTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find();
    res.status(200).json({ tuits });
  } catch (error) {
    next(error);
  }
};

const publishTuit = async (req, res) => {
  const { date, text, likes } = req.body;
  const tuit = { date, text, likes };

  const newTuit = await Tuit.create(tuit);
  res.json(newTuit);
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTuits, publishTuit, getUsers };
