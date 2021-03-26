"use strict";

import { Router } from "express";
import { SaleController } from "../controllers";
import { VerifyToken } from "../middlewares";

const apiSale = Router();

apiSale.get("/", VerifyToken, SaleController.showSales);
apiSale.post("/", VerifyToken, SaleController.storeSale);
apiSale.get("/:saleId", VerifyToken, SaleController.showSaleById);
apiSale.delete("/:saleId", VerifyToken, SaleController.destroySale);

export default apiSale;
