"use strict";

import { Router } from "express";
import { UserController } from "../controllers";

const apiUser = Router();

apiUser.get("/", UserController.showUsers);
apiUser.post("/", UserController.storeUser);
apiUser.put("/:userId", UserController.updateUser);
apiUser.get("/:userId", UserController.showUserById);
apiUser.delete("/:userId", UserController.destroyUser);

export default apiUser;
