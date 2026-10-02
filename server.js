

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const speechRoutes = require("./routes/speechRoutes");
const visualRoutes = require("./routes/visualRoutes");
const hearingRoutes = require("./routes/hearingRoutes");
const mobilityRoutes = require("./routes/mobilityRoutes");
const intellectualRoutes = require("./routes/IntellectualRoutes");


app.use(cors());
app.use(express.json());

app.use("/api/speech", speechRoutes);
app.use("/api/visual", visualRoutes);
app.use("/api/hearing", hearingRoutes);
app.use("/api/mobility", mobilityRoutes);
app.use("/api/intellectual", intellectualRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });

app.get("/", (req, res) => {
  res.send("Diservent Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});