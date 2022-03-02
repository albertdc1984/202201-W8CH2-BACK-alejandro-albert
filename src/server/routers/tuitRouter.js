require("dotenv").config();
const express = require("express");
const { getTuits, publishTuit } = require("../tuitsController/tuitsController");

const router = express.Router();

router.get("/", getTuits);
router.post("/", publishTuit);

module.exports = router;
