const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
// const driverRouter = require('./routes/driverRoutes');

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);
// server.use('/drivers', getDrivers);

module.exports = server;
