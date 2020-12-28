"use strict";

import jwt from "jsonwebtoken";
import config from "../config";

const verifyToken = async (req, res, next) => {
  {
    try {
      const token = req.headers["authorization"]
        ? req.headers["authorization"].replace("Bearer ", "")
        : undefined;

      const decodedToken = jwt.verify(token, config.jwtSecret);
      req.token = decodedToken;
      next();
    } catch (err) {
      res.status(403).send({ message: "Unauthorized" });
    }
  }
};

export default verifyToken;
