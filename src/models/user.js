"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
