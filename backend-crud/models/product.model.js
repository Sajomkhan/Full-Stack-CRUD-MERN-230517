const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add product name"],
  },

  price: {
    type: Number,
    required: [true, "Please add product price"],
  },

  desc: String,

  // img: {
  //   type: String,
  //   required: [true, "Please put product image"],
  // },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product-Anis", productsSchema);
