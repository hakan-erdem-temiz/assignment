const winston = require("winston");
const express = require("express");
const config = require("config");

var app = express();
app.set("view engine", "ejs");
app.set("views", "views");
// require("./services/logging")();

// set env variables from .env file. Please add manually .env file becase it is ignored for git
require("dotenv").config();

require("./services/routes")(app);
require("./services/config")();
require("./services/webSocket-server");
require("./services/producers");

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
