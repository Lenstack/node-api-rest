"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const apiProduct = require("./src/routes/product");
const apiUser = require("./src/routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", apiProduct);
app.use("/api", apiUser);

module.exports = app;
