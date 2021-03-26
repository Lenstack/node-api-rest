"use strict";

import { Sale } from "../models";

const showSales = async (req, res, next) => {
  await Sale.find()
    .then((sale) => {
      !sale
        ? res.status(404).send({ message: "Sales not found" })
        : res.status(200).send(sale);
    })
    .catch((err) => {
      res.status(404).send({ error: err });
    });
};

const showSaleById = async (req, res, next) => {
  const { saleId } = req.params;

  await Sale.findById(saleId)
    .then((sale) => {
      !sale
        ? res.status(404).send({ message: "Sale not found" })
        : res.status(200).send(sale);
    })
    .catch((err) => {
      res.status(404).send({ error: err });
    });
};

const storeSale = async (req, res, next) => {
  const sale = new Sale(req.body);

  await sale
    .save()
    .then((sale) => {
      res.status(201).send(sale);
    })
    .catch((err) => {
      res.status(404).send({ message: err });
    });
};

const destroySale = async (req, res, next) => {
  const { saleId } = req.params;

  await Product.findByIdAndRemove(saleId)
    .then((sale) => {
      !sale
        ? res.status(404).send({ message: "Sale not found" })
        : res.status(200).send(prod);
    })
    .catch((err) => {
      res.status(404).send({ message: "Sale not found", error: err });
    });
};

export default {
  showSales,
  showSaleById,
  storeSale,
  destroySale,
};
