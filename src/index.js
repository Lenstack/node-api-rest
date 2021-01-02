"use strict";

import mongoose from "mongoose";
import app from "./app";
import config from "./config";

try {
  app.listen(config.port, () => {
    console.log(`Server is running in port: ${config.port}...`);
  });
} catch (err) {
  console.log(`Server is down...`, err);
}

mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB...`);
  })
  .catch((err) => {
    console.log(`Could not connect to MongoDB...`, err);
  });
