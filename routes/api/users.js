const express = require("express");
const router = express.Router();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

router.get("/", function(req, res){
    res.json("This is a json status code for the users API.");
});

client.connect();

client.query('SELECT * FROM test_table;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

module.exports = router;