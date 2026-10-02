const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const SpeechContent = mongoose.model(
  "SpeechContent",
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
      collection: "speechContent",
    }
  )
);

router.get("/stammering", async (req, res) => {
  try {
    const data = await SpeechContent.find({
      disability: "speech",
      type: "stammering",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch stammering content",
      error: error.message,
    });
  }
});

router.get("/lisping", async (req, res) => {
  try {
    const data = await SpeechContent.find({
      disability: "speech",
      type: "lisping",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch lisping content",
      error: error.message,
    });
  }
});

router.get("/apraxia", async (req, res) => {
  try {
    const data = await SpeechContent.find({
      disability: "speech",
      type: "apraxia",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch apraxia content",
      error: error.message,
    });
  }
});

router.get("/dysarthria", async (req, res) => {
  try {
    const data = await SpeechContent.find({
      disability: "speech",
      type: "dysarthria",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch dysarthria content",
      error: error.message,
    });
  }
});

router.get("/voice-disorders", async (req, res) => {
  try {
    const data = await SpeechContent.find({
      disability: "speech",
      type: "voice-disorders",
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch voice disorders content",
      error: error.message,
    });
  }
});

module.exports = router;