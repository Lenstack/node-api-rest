"use strict";

import { User } from "../models";
import jwt from "jsonwebtoken";
import config from "../config";

const signInUser = async (req, res, next) => {
  const { email, password } = req.body;

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    const isVerifiedPassword = await User.comparePassword(
      password,
      isUser.password
    );

    const token = jwt.sign({ id: isUser._id }, config.jwtSecret, {
      expiresIn: 86400,
    });

    return isVerifiedPassword
      ? res.status(200).send({ Authorization: token })
      : res
          .status(404)
          .send({ Authorization: "User or Password is Incorrect" });
  }

  return res.status(404).send({ message: "User or Password is Incorrect" });
};

const signUpUser = async (req, res, next) => {
  const { name, email, password, roles } = req.body;

  const isUser = await User.findOne({ email: email });

  if (!isUser) {
    const newUser = new User({
      name: name,
      email: email,
      password: await User.encodePassword(password),
      roles: roles,
    });

    await newUser
      .save()
      .then((user) => {
        const token = jwt.sign({ id: user._id }, config.jwtSecret, {
          expiresIn: 86400,
        });
        res.status(200).send({ Authorization: token });
      })
      .catch((err) => {
        res.status(404).send({ Message: err });
      });
  }

  return res
    .status(404)
    .send({ Message: "This email as been already Register" });
};

export default {
  signInUser,
  signUpUser,
};
