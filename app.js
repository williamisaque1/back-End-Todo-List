const routes = require("./src/routes/index");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
module.exports = app;
