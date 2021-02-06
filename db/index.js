const mysql = require("mysql2");
require("dotenv").config();

const [name, username, password, host, port] = [
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  process.env.DATABASE_HOST,
  process.env.DATABASE_PORT,
];

const db = mysql.createConnection({
  host: host,
  port: port,
  user: username,
  password: password,
  database: name,
});

db.connect();

module.exports = db;
