"use strict";

import { Router } from "express";
import { ProductController } from "../controllers";

const apiProduct = Router();

apiProduct.get("/", ProductController.showProducts);
apiProduct.get("/:productId", ProductController.showProductById);
apiProduct.post("/", ProductController.storeProduct);
apiProduct.put("/:productId", ProductController.updateProduct);
apiProduct.delete("/:productId", ProductController.destroyProduct);

export default apiProduct;
