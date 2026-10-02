const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const IntellectualContent = mongoose.model(
  "IntellectualContent",
  new mongoose.Schema(
    {
      disability: String,
      type: String,
      section: String,
      title: {
        en: String,
        hi: String,
      },
      content: {
        en: String,
        hi: String,
      },
    },
    {
      collection: "intellectualContent",
    }
  )
);


// ==========================================
// DOWN SYNDROME
// ==========================================

router.get("/down-syndrome", async (req, res) => {
  try {
    const data = await IntellectualContent.find({
      disability: "intellectual",
      type: "down-syndrome",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Down syndrome content",
      error: error.message,
    });
  }
});


// ==========================================
// FRAGILE X SYNDROME
// ==========================================

router.get("/fragile-x-syndrome", async (req, res) => {
  try {
    const data = await IntellectualContent.find({
      disability: "intellectual",
      type: "fragile-x-syndrome",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Fragile X syndrome content",
      error: error.message,
    });
  }
});


module.exports = router;