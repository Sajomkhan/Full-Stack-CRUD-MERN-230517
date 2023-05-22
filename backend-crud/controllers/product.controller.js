const Product = require("../models/product.model");

exports.createProduct = async (req, res) => {
  const { title, price } = req.body;
  try {
    const newProduct = new Product({ title, price });
    const saveProduct = await newProduct.save();
    res.status(201).send(saveProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.title = req.body.title;
    product.price = Number(req.body.price);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).send({
        success: true,
        message: "Delete successfully",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


