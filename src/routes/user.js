"use strict";

import { Router } from "express";
import {
  showUsers,
  showUserById,
  storeUser,
  updateUser,
  destroyUser,
} from "../controllers/user";

const apiUser = Router();

apiUser.get("/", showUsers);
apiUser.post("/", storeUser);
apiUser.put("/:userId", updateUser);
apiUser.get("/:userId", showUserById);
apiUser.delete("/:userId", destroyUser);

export default apiUser;
