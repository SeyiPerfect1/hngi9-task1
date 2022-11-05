const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/api/biodata", (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
      slackUsername: "Oluseyi",
      backend: true,
      age: 26,
      bio: "I am Oluseyi, HNGi9 intern from Nigeria. When I'm not writing code, I watch movies",
    });
  } catch (error) {
    res.status(500).json({
      meassage: "Internal server error",
      error: err,
    });
  }
});

app.post("/api/arithimetics", (req, res, next) => {
  const { operation_type, x, y } = req.body;
  parseInt(x);
  parseInt(y);

  try {
    let result = 0;
    if (operation_type["enum"] === "addition") {
      result = x + y;
    } else if (operation_type["enum"] === "subtraction") {
      if (x > y) {
        result = x - y;
      } else {
        result = y - x;
      }
    } else if (operation_type["enum"] === "multiplication") {
      result = x * y;
    }
    else{
      res.json({
        message: "use a valid operator"
      })
    }
    res.status(200).json({
      slackUsername: "Oluperfect",
      operation_type: `${operation_type["enum"]}`,
      result: result,
    });
  } catch (err) {
    next(err);
  }
});

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});

module.exports = app;
