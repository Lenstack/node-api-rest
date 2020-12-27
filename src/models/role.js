"use strict";

import { Schema, model } from "mongoose";

const RoleSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Role", RoleSchema);
