"use strict";

const Product = require("../models/product");

const showProducts = async (req, res, next) => {
  await Product.find()
    .then((prod) => {
      !prod
        ? res.status(404).send({ message: "Products not found" })
        : res.status(200).send(prod);
    })
    .catch((err) => {
      res.status(404).send({ error: err });
    });
};

const showProductById = async (req, res, next) => {
  const { productId } = req.params;

  await Product.findById(productId)
    .then((prod) => {
      !prod
        ? res.status(404).send({ message: "Product not found" })
        : res.status(200).send(prod);
    })
    .catch((err) => {
      res.status(404).send({ error: err });
    });
};

const storeProduct = async (req, res, next) => {
  const product = new Product(req.body);

  await product
    .save()
    .then((prod) => {
      res.status(200).send(prod);
    })
    .catch((err) => {
      res.status(404).send({ message: err });
    });
};

const updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  const product = req.body;

  await Product.findByIdAndUpdate(productId, product)
    .then((prod) => {
      res.status(200).send(prod);
    })
    .catch((err) => {
      res.status(404).send({ message: "product not found", error: err });
    });
};

const destroyProduct = async (req, res, next) => {
  const { productId } = req.params;

  await Product.findById(productId)
    .then((prod) => {
      prod.remove();
      res.status(200).send(prod);
    })
    .catch((err) => {
      res.status(404).send({ message: "product not found", error: err });
    });
};

module.exports = {
  showProducts,
  showProductById,
  storeProduct,
  updateProduct,
  destroyProduct,
};
