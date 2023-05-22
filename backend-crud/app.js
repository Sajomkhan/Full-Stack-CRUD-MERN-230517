const express = require("express");
const app = express();
const cors = require("cors");

require("./config/db");
const productRoute = require("./routes/product.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/product", productRoute);

module.exports = app;
