"use strict";

import bcrypt from "bcrypt";
import { saltRounds } from "../config";

const getSalt = async () => {
  return await bcrypt.genSaltSync(+saltRounds);
};

const encryptPassword = async (password) => {
  const salt = await getSalt();
  return await bcrypt.hashSync(password, salt);
};

const comparePassword = async (passwordFromClient, encryptedPassword) => {
  return await bcrypt.compareSync(passwordFromClient, encryptedPassword);
};

export default { encryptPassword, comparePassword };
