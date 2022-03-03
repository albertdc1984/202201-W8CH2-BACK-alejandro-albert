require("dotenv").config();
const express = require("express");
const {
  getTuits,
  publishTuit,
  getUsers,
  newTwitero,
} = require("../tuitsController/tuitsController");

const router = express.Router();

router.get("/", getTuits);
router.post("/", publishTuit);
router.get("/twiteros", getUsers);
router.post("/twiteros", newTwitero);
module.exports = router;
