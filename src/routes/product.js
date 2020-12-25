"use strict";

const express = require("express");
const {
  showProducts,
  showProductById,
  storeProduct,
  updateProduct,
  destroyProduct,
} = require("../controllers/product");

const apiProduct = express.Router();

apiProduct.get("/product", showProducts);
apiProduct.post("/product", storeProduct);
apiProduct.put("/product/:productId", updateProduct);
apiProduct.get("/product/:productId", showProductById);
apiProduct.delete("/product/:productId", destroyProduct);

module.exports = apiProduct;
