const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const MobilityContent = mongoose.model(
  "MobilityContent",
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

      image: String,
    },
    {
      collection: "mobilityContent",
    }
  )
);

// ==========================================
// CEREBRAL PALSY
// ==========================================

router.get("/cerebral-palsy", async (req, res) => {
  try {
    const data = await MobilityContent.find({
      disability: "mobility",
      type: "cerebral-palsy",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch cerebral palsy content",
      error: error.message,
    });
  }
});


// ==========================================
// SPINAL CORD INJURY
// ==========================================

router.get("/spinal-cord-injury", async (req, res) => {
  try {
    const data = await MobilityContent.find({
      disability: "mobility",
      type: "spinal-cord-injury",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch spinal cord injury content",
      error: error.message,
    });
  }
});


// ==========================================
// MULTIPLE SCLEROSIS
// ==========================================

router.get("/multiple-sclerosis", async (req, res) => {
  try {
    const data = await MobilityContent.find({
      disability: "mobility",
      type: "multiple-sclerosis",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch multiple sclerosis content",
      error: error.message,
    });
  }
});
module.exports = router;