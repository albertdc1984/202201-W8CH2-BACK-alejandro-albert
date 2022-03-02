const { model, Schema } = require("mongoose");

const tuitSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  text: {
    type: String,
    min: 1,
    max: 200,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Tuit = model("Tuit", tuitSchema, "tuits");

module.exports = Tuit;
