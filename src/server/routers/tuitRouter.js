require("dotenv").config();
const express = require("express");
const getTuits = require("../tuitsController/tuitsController");

const router = express.Router();

router.get("/", getTuits);

module.exports = router;
