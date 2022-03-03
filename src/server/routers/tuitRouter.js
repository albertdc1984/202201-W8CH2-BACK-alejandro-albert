require("dotenv").config();
const express = require("express");
const {
  getTuits,
  publishTuit,
  getUsers,
  newTuiteroController,
  deleteTuitero,
  changeTuitero,
} = require("../tuitsController/tuitsController");

const router = express.Router();

router.get("/", getTuits);
router.post("/", publishTuit);
router.get("/tuiteros", getUsers);
router.delete("/tuiteros/:id", deleteTuitero);
router.post("/tuiteros/new", newTuiteroController);
router.patch("/tuiteros/:id", changeTuitero);

module.exports = router;
