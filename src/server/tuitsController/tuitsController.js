const Tuit = require("../../database/models/Tuit");
const Tuitero = require("../../database/models/Tuitero");

const getTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find();
    res.json({ tuits });
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
    const tuiteros = await Tuitero.find();
    res.status(200).json({ tuiteros });
  } catch (error) {
    next(error);
  }
};

const newTuiteroController = async (req, res) => {
  const { name, username } = req.body;
  const tuitero = { name, username };
  const newTuitero = await Tuitero.create(tuitero);
  res.json(newTuitero);
};

module.exports = { getTuits, publishTuit, getUsers, newTuiteroController };
