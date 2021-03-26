"use strict";

import { Router } from "express";
import { UserController } from "../controllers";
import { VerifyToken } from "../middlewares";

const apiUser = Router();

apiUser.get("/", VerifyToken, UserController.showUsers);
apiUser.put("/:userId", VerifyToken, UserController.updateUser);
apiUser.get("/:userId", VerifyToken, UserController.showUserById);
apiUser.delete("/:userId", VerifyToken, UserController.destroyUser);

export default apiUser;
