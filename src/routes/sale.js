"use strict";

import { Router } from "express";
import { SaleController } from "../controllers";

const apiSale = Router();

apiSale.get("/", SaleController.showSales);
apiSale.post("/", SaleController.storeSale);
apiSale.get("/:saleId", SaleController.showSaleById);
apiSale.delete("/:saleId", SaleController.destroySale);

export default apiSale;
