"use strict";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { apiProduct, apiUser, apiSale, apiAuth } from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/products", apiProduct);
app.use("/api/users", apiUser);
app.use("/api/auth", apiAuth);
app.use("/api/sales", apiSale);

export default app;
