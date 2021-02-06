const mysql = require("mysql");
require("dotenv").config();

const [name, username, password, host] = [
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  process.env.DATABASE_HOST,
];

const connection = mysql.createConnection({
  host: host,
  user: username,
  password: password,
  database: name,
});

connection.connect();

module.exports = connection;
