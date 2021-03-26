"use strict";

import { Schema, model } from "mongoose";

const SaleSchema = new Schema(
  {
    products: [
      {
        quantity: { type: Number, default: 0 },
        product: {
          ref: "Product",
          type: Schema.Types.ObjectId,
          required: true,
        },
      },
    ],
    user: {
      ref: "User",
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Sale", SaleSchema);
