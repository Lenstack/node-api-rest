"use strict";

import { User } from "../models";
import { Bcrypt } from "../helpers";
import config from "../config";
import Jwt from "jsonwebtoken";

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  const isUser = await User.findOne({ email });

  if (isUser) {
    const comparedPassword = await Bcrypt.comparePassword(
      password,
      isUser.password
    );

    comparedPassword
      ? Jwt.sign(
          { user: isUser },
          config.jwtSecret,
          { expiresIn: config.expiresIn },
          (err, token) => {
            return err
              ? res.status(404).send({ err })
              : res.status(200).send({ token });
          }
        )
      : res.status(404).json({ message: "Incorrect user or password." });
  } else {
    return res.status(404).json({ message: "Incorrect user or password." });
  }
};

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
