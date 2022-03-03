require("dotenv").config();
const express = require("express");
const {
  getTuits,
  publishTuit,
  getUsers,
} = require("../tuitsController/tuitsController");

const router = express.Router();

router.get("/", getTuits);
router.post("/", publishTuit);
router.get("/twiteros", getUsers);

module.exports = router;
