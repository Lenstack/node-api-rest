"use strict";

import { Schema } from "mongoose";

const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: {
    type: String,
    enum: ["computers", "phones", "accesories", "lacteos"],
  },
  description: String,
});
export default mongoose.model("Product", ProductSchema);
