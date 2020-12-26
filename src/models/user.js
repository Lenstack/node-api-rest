"use strict";

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String },
});

export default mongoose.model("User", UserSchema);
