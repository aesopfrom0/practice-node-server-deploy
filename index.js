const express = require("express");
const db = require("./db");

const app = express();

app.get("/", (req, res) => {
  console.log("GET /");
  res.send("hello practice");
});

app.get("/users", (req, res) => {
  console.log("USER DB 접근 중");
  const queryStr = `select * from users`;
  db.query(queryStr, (err, result) => {
    res.status(200).send(result);
  });
});

app.listen(3000, () => {
  console.log("server on 3000");
});
