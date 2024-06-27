const express = require("express");
const router = express.Router();
const Article = require("../models/Article.model");

router.get("/allArticles", async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching articles" });
  }
});
router.post("/newArticle", async (req, res, next) => {
  console.log(req.body);
  try {
    await Article.create({ title: req.body.title, body: req.body.body });
    res.status(200).json({ message: "Article created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating article" });
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const article = await Article.findById(id);
    res.status(200).json(article);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching article" });
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const article = await Article.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(article);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating article" });
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Article.findByIdAndDelete(id);
    res.status(200).json({ message: "Article deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting article" });
  }
});

module.exports = router;
