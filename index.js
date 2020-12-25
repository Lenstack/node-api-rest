"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

try {
  app.listen(config.port, () => {
    console.log(`Server running in port: ${config.port}`);
  });
} catch (err) {
  console.log(`Server is down`, err);
}

try {
  mongoose.connect(
    config.db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => {
      console.log(`DB online`);
    }
  );
} catch (err) {
  console.log(`DB offline`);
}
