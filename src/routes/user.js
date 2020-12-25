"use strict";

const express = require("express");
const {
  showUsers,
  showUserById,
  storeUser,
  updateUser,
  destroyUser,
} = require("../controllers/user");

const apiUser = express.Router();

apiUser.get("/user", showUsers);
apiUser.post("/user", storeUser);
apiUser.put("/user/:userId", updateUser);
apiUser.get("/user/:userId", showUserById);
apiUser.delete("/user/:userId", destroyUser);

module.exports = apiUser;
