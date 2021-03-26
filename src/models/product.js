"use strict";

import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: String,
    imageURL: String,
    price: { type: Number, default: 0 },
    category: {
      type: String,
      enum: ["carnes"],
    },
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Product", ProductSchema);
