"use strict";

import { User } from "../models";

const signInUser = async (req, res, next) => {};

const signUpUser = async (req, res, next) => {};

const showUsers = async (req, res, next) => {
  await User.find()
    .then((user) => {
      !user
        ? res.status(404).send({ message: "Users not found" })
        : res.status(200).send(user);
    })
    .catch((err) => {
      res.status(404).send({ error: err });
    });
};

const showUserById = async (req, res, next) => {
  const { userId } = req.params;

  await User.findById(userId)
    .then((user) => {
      !user
        ? res.status(404).send({ message: "User not found" })
        : res.status(200).send(user);
    })
    .catch((err) => {
      res.status(404).send({ error: err });
    });
};

const storeUser = async (req, res, next) => {
  const newUser = new User(req.body);

  await newUser
    .save()
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send({ message: err });
    });
};

const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const updateUser = req.body;

  await User.findByIdAndUpdate(userId, updateUser, { new: true })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(404).send({ message: "User not found", error: err });
    });
};

const destroyUser = async (req, res, next) => {
  const { userId } = req.params;

  await User.findById(userId)
    .then((user) => {
      user.remove();
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(404).send({ message: "User not found", error: err });
    });
};

export default {
  signInUser,
  signUpUser,
  showUsers,
  showUserById,
  storeUser,
  updateUser,
  destroyUser,
};
