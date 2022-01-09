const routes = require("./src/routes/index");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin:
      "https://app-front-end-todo-list.herokuapp.com" |
      "http://192.168.0.17:3000",
  })
);
app.use(express.json());
app.use(routes);
module.exports = app;
