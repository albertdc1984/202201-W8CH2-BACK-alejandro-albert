const { model, Schema } = require("mongoose");

const tuiteroSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Tuitero = model("Tuitero", tuiteroSchema, "tuiteros");

module.exports = Tuitero;
