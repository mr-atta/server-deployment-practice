"use strict";

//import
const express = require("express");
const app = express();
//
const pageNotFoundHandler = require("./handlers/404");
const errHandler = require("./handlers/500.js");

// git
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.get("/data", (req, res) => {
  let outputData = {
    fistName: "mohammad",
    lastName: "ali",
    old: "25",
    city: "amman",
  };
  res.status(200).json(outputData);
});

app.get("/bad", (req, res, next) => {
  next("error from (bad) end point");
});

app.use(errHandler);

app.use("*", pageNotFoundHandler);

// listen
function start(port) {
  app.listen(port, () => console.log(`server listen at port : ${port}`));
}

module.exports = {
  start,
  // start:start,
  app,
};
