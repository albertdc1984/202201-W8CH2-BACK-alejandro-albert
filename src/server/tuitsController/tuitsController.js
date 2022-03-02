const Tuit = require("../../database/models/Tuit");

const getTuits = async (req, res, next) => {
  try {
    const users = await Tuit.find();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

export default getTuits;
