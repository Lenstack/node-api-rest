"use strict";

import mongoose from "mongoose";
import app from "./app";
import config from "./config";

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
      useCreateIndex: true,
    },
    () => {
      console.log(`DB online`);
    }
  );
} catch (err) {
  console.log(`DB offline`);
}
