const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("index.js에 접근 중");
  res.send("hello practice");
});

// app.listen(5000, ()=> {
//   console.log('server on 5000')
// })
