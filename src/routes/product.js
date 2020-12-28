"use strict";

import { Router } from "express";
import { ProductController } from "../controllers";
import { VerifyToken } from "../middlewares";

const apiProduct = Router();

apiProduct.get("/", VerifyToken, ProductController.showProducts);
apiProduct.get("/:productId", VerifyToken, ProductController.showProductById);
apiProduct.post("/", VerifyToken, ProductController.storeProduct);
apiProduct.put("/:productId", VerifyToken, ProductController.updateProduct);
apiProduct.delete("/:productId", VerifyToken, ProductController.destroyProduct);

export default apiProduct;
