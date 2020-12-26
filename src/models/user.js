"use strict";

import { Schema } from "mongoose";

const UserSchema = Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String },
});

export default mongoose.model("User", UserSchema);
