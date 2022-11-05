const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { arithmeticEnum, arithmetic } = require("./arithmetic");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
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

app.post("/", (req, res) => {
  let { operation_type, x, y } = req.body;
  //cast x and y to numbers
  parseInt(x);
  parseInt(y);

  //check for operation/operation keywords
  let operationType =
    operation_type == arithmeticEnum.addition ||
    operation_type.includes("addition") ||
    operation_type.includes("add") ||
    operation_type.includes("plus") ||
    operation_type.includes("+")
      ? arithmeticEnum.addition
      : operation_type == arithmeticEnum.subtraction ||
        operation_type.includes("subtraction") ||
        operation_type.includes("minus") ||
        operation_type.includes("-") ||
        operation_type.includes("remove")
      ? arithmeticEnum.subtraction
      : operation_type == arithmeticEnum.multiplication ||
        operation_type.includes("multiplication") ||
        operation_type.includes("multiply") ||
        operation_type.includes("times") ||
        operation_type.includes("of") ||
        operation_type.includes("*")
      ? arithmeticEnum.multiplication
      : "invalid";

  //extract x and y
  const regex = /\d+/gm;
  const nums = operation_type.match(regex);
  console.log(nums)
  if (nums) {
    x = parseInt(nums[0]);
    y = parseInt(nums[1]);
  }

  let finalResult = arithmetic(operationType, x, y);
  return res.status(200).json({
    slackUsername: "Oluperfect",
    result: finalResult,
    operation_type: operationType,
  });
});

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});

module.exports = app;
