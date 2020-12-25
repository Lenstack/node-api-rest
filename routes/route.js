"use strict";

const express = require("express");
const {
  showProducts,
  showProductById,
  storeProduct,
  updateProduct,
  destroyProduct,
} = require("../controllers/product");

const api = express.Router();

api.get("/products", showProducts);
api.post("/products", storeProduct);
api.put("/products/:productId", updateProduct);
api.get("/products/:productId", showProductById);
api.delete("/products/:productId", destroyProduct);

module.exports = api;
