const express = require("express");
const router = express.Router();

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

//TODO:: add in error and info.

router.use("/", require("./home"));

module.exports = router;