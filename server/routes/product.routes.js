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

router.get("/collections/:collection", async (req, res, next) => {
  console.log("Collection parameter:", req.params.collection);
  try {
    const products = await Product.find({ collection: req.params.collection });
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching products");
  }
});

router.get("/products/:category", async (req, res, next) => {
  const category = req.params.category;
  try {
    const products = await Product.find({ category: { $in: [category] } });
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error fetching products by category" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("bundle.bundle1 bundle.bundle2 bundle.bundle3 bundle.bundle4")
      .exec();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching the product" });
  }
});
module.exports = router;
