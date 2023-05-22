const mongoose = require("mongoose");
const config = require("./config");

const URL = config.db.url;

mongoose
  .connect(URL)
  .then(() => {
    console.log("mongodb atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
