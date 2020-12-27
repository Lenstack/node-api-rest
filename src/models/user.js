"use strict";

import { Schema, model } from "mongoose";
import config from "../config";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.statics.encodePassword = async (password) => {
  const salt = await bcrypt.genSalt(config.saltRounds);
  return await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("User", UserSchema);
