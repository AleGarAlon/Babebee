const express = require("express");
const router = express.Router();
const Article = require("../models/Article.model");

router.post("/newArticle", async (req, res, next) => {
  console.log(req.body);
  try {
    await Article.create({ title: req.body.title, body: req.body.body });
    res.status(200).json({ message: "Article created" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/AllArticles", async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const article = await Article.findById(id);
    res.status(200).json(article);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const article = await Article.findByIdAndUpdate(id);
    res.status(200).json(article);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const article = await Article.findByIdAndDelete(id);
    res.status(200).json({ message: "Article deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
