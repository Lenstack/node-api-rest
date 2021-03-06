"use strict";

import config from "dotenv/config";

export default {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB,
  saltRounds: Number(process.env.SALT_ROUDS),
  jwtSecret: process.env.JWT_SECRET,
  expiresIn: process.env.EXPIRES_IN,
};
