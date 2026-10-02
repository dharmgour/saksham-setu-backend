const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const HearingContent = mongoose.model(
  "HearingContent",
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
      collection: "hearingContent",
    }
  )
);


// ==========================================
// CONDUCTIVE HEARING LOSS
// ==========================================

router.get("/conductive-hearing-loss", async (req, res) => {
  try {
    const data = await HearingContent.find({
      disability: "hearing",
      type: "conductive-hearing-loss",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch conductive hearing loss content",
      error: error.message,
    });
  }
});


// ==========================================
// SENSORINEURAL HEARING LOSS
// ==========================================

router.get("/sensorineural-hearing-loss", async (req, res) => {
  try {
    const data = await HearingContent.find({
      disability: "hearing",
      type: "sensorineural-hearing-loss",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch sensorineural hearing loss content",
      error: error.message,
    });
  }
});


// ==========================================
// MIXED HEARING LOSS
// ==========================================

router.get("/mixed-hearing-loss", async (req, res) => {
  try {
    const data = await HearingContent.find({
      disability: "hearing",
      type: "mixed-hearing-loss",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch mixed hearing loss content",
      error: error.message,
    });
  }
});


module.exports = router;