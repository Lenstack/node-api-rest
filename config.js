"use strict";

const config = require("dotenv/config");

module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB,
  saltRounds: process.env.SALT_ROUDS,
  jwtSecret: process.env.JWT_SECRET,
};
