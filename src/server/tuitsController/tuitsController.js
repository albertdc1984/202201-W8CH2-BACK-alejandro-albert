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
  return res.status(201);
};

const getUsers = async (req, res, next) => {
  try {
    const tuiteros = await Tuitero.find();

    res.json({ tuiteros });
  } catch (error) {
    next(error);
  }
};

const newTuiteroController = async (req, res) => {
  const { name, username } = req.body;
  const tuitero = { name, username };
  const newTuitero = await Tuitero.create(tuitero);
  res.json(newTuitero);
  return res.status(201);
};

const deleteTuitero = async (req, res) => {
  const { id } = req.params;
  const deletedTuitero = await Tuitero.findByIdAndDelete(id);
  res.json(deletedTuitero);
};

const changeTuitero = async (req, res) => {
  const { name, username } = req.body;
  const tuiteroToUpdate = { name, username };
  const { id } = req.params;

  const updatedTuitero = await Tuitero.findByIdAndUpdate(id, tuiteroToUpdate);
  res.json(updatedTuitero);
};

module.exports = {
  getTuits,
  publishTuit,
  getUsers,
  newTuiteroController,
  deleteTuitero,
  changeTuitero,
};
