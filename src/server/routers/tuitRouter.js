require("dotenv").config();
const express = require("express");
const {
  getTuits,
  publishTuit,
  getUsers,
  newTuiteroController,
} = require("../tuitsController/tuitsController");

const router = express.Router();

router.get("/", getTuits);
router.post("/", publishTuit);
router.get("/tuiteros", getUsers);
router.post("/tuiteros", newTuiteroController);
module.exports = router;
