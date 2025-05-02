const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const dbcon = mysql2.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
});

module.exports = dbcon.promise();
