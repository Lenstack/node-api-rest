"use strict";

import { Router } from "express";
import { AuthController } from "../controllers";

const apiAuth = Router();

apiAuth.post("/signin", AuthController.signInUser);
apiAuth.post("/signup", AuthController.signUpUser);

export default apiAuth;
