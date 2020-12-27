"use strict";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { apiProduct, apiUser, apiAuth } from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/product", apiProduct);
app.use("/api/user", apiUser);
app.use("/api/auth", apiAuth);

export default app;
