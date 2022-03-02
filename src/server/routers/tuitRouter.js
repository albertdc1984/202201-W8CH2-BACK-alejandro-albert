require("dotenv").config();
const express = require("express");
const { default: getTuits } = require("../tuitsController/tuitsController");

const router = express.Router();

router.get("/", getTuits);
router.post("/publish");

module.exports = router;
