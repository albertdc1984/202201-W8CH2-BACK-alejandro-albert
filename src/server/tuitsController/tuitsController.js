const Tuit = require("../../database/models/Tuit");

const getTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find();
    res.status(200).json({ tuits });
  } catch (error) {
    next(error);
  }
};

module.exports = getTuits;
