const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model");

router.get("/all", async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    console.log(allProducts);
    res.status(200).json({ allProducts });
  } catch (error) {
    console.log(error);
  }
});

router.post("/newProduct", async (req, res, next) => {
  const newProduct = req.body;
  try {
    const createdProduct = await Product.create(newProduct);
    console.log(createdProduct);
    res.status(200).json({ message: "Product created" });
  } catch (error) {
    console.log(error);
  }
});

router.put("/editProduct/:id", async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
