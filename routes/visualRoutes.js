const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const VisualContent = mongoose.model(
  "VisualContent",
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
      collection: "visualContent",
    }
  )
);


// ==========================================
// BLINDNESS
// ==========================================

router.get("/blindness", async (req, res) => {
  try {
    const data = await VisualContent.find({
      disability: "visual",
      type: "blindness",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blindness content",
      error: error.message,
    });
  }
});


// ==========================================
// LOW VISION
// ==========================================

router.get("/low-vision", async (req, res) => {
  try {
    const data = await VisualContent.find({
      disability: "visual",
      type: "low-vision",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch low vision content",
      error: error.message,
    });
  }
});


// ==========================================
// CATARACT
// ==========================================

router.get("/cataract", async (req, res) => {
  try {
    const data = await VisualContent.find({
      disability: "visual",
      type: "cataract",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch cataract content",
      error: error.message,
    });
  }
});


// ==========================================
// GLAUCOMA
// ==========================================

router.get("/glaucoma", async (req, res) => {
  try {
    const data = await VisualContent.find({
      disability: "visual",
      type: "glaucoma",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch glaucoma content",
      error: error.message,
    });
  }
});


// ==========================================
// DIABETIC RETINOPATHY
// ==========================================

router.get("/diabetic-retinopathy", async (req, res) => { 
  try {
    const data = await VisualContent.find({
      disability: "visual",
      type: "diabetic-retinopathy",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch diabetic retinopathy content",
      error: error.message,
    });
  }
});


// ==========================================
// MACULAR DEGENERATION
// ==========================================

router.get("/macular-degeneration", async (req, res) => {
  try {
    const data = await VisualContent.find({
      disability: "visual",
      type: "macular-degeneration",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch macular degeneration content",
      error: error.message,
    });
  }
});


module.exports = router;