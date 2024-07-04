const express = require("express");
const router = express.Router();
const Announcement = require("../models/Announcement");

router.get("/", async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching announcements" });
  }
});

router.post("/newAnnouncement", async (req, res, next) => {
  console.log(req.body);
  try {
    await Announcement.create({
      title: req.body.title,
      image: req.body.image,
      body: req.body.body,
    });
    res.status(200).json({ message: "Announcement created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating Announcement" });
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const announcement = await Announcement.findById(id);
    res.status(200).json(announcement);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching announcement" });
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const announcement = await Announcement.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(announcement);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating announcement" });
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Announcement.findByIdAndDelete(id);
    res.status(200).json({ message: "Announcement deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting Announcement" });
  }
});

module.exports = router;
