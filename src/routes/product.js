"use strict";

import { Router } from "express";
import {
  showProducts,
  showProductById,
  storeProduct,
  updateProduct,
  destroyProduct,
} from "../controllers/product";

const apiProduct = Router();

apiProduct.get("/", showProducts);
apiProduct.get("/:productId", showProductById);
apiProduct.post("/", storeProduct);
apiProduct.put("/:productId", updateProduct);
apiProduct.delete("/:productId", destroyProduct);

export default apiProduct;
