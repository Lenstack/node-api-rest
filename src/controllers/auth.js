"use strict";

import { User } from "../models";
import { Bcrypt } from "../helpers";
import config from "../config";
import Jwt from "jsonwebtoken";

const signInUser = async (req, res) => {};

const signUpUser = async (req, res) => {
  const { name, email, password, roles } = req.body;
  const isUser = await User.findOne({ email });

  if (!isUser) {
    const encryptedPassword = await Bcrypt.encryptPassword(password);

    const newUser = new User({
      name,
      email,
      password: encryptedPassword,
      roles,
    });
    console.log(config);
    newUser.save().then((user) => {
      Jwt.sign(
        { user },
        config.jwtSecret,
        { expiresIn: config.expiresIn },
        (err, token) => {
          return err
            ? res.status(404).send({ err })
            : res.status(200).send({ token });
        }
      );
    });
  } else {
    return res.status(404).json({ message: "This user already exist." });
  }
};

export default {
  signInUser,
  signUpUser,
};
