"use strict";

import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("User", UserSchema);
