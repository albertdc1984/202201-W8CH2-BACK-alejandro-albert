require("dotenv").config();
const debug = require("debug")("tuiter:");
const chalk = require("chalk");
const databaseConnect = require("./database");
const serverUp = require("./server/serverUp");

const app = require("./server/index");

const port = process.env.PORT || 4000;
const mongoConnection = process.env.MONGO_STRING;

(async () => {
  try {
    await databaseConnect(mongoConnection);
    await serverUp(app, port);
  } catch (error) {
    debug(chalk.bgRed.white(error.message));
  }
})();
