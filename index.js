const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("index.js에 접근 중");
  res.send("hello practice");
});

app.listen(3000, () => {
  console.log("server on 3000");
});
