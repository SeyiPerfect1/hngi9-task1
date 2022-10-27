const express = require("express");

const PORT = 4000;
const app = express();

app.get("/api/biodata", (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      slackUserename: "Oluseyi",
      backend: true,
      age: 26,
      bio: "I am a Oluseyi, a HNGi9 intern from Nigeria. When I'm not writing code, I watch movies",
    });
  } catch (error) {
    res.status(500).json({
      meassage: "Internal server error",
      error: err,
    });
  }
});

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});

module.exports = app;
