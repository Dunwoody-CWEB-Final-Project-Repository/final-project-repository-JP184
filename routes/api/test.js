const express = require("express");
const router = express.Router();
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

router.get('/db', (req, res) => {
    client.connect();

    client.query('SELECT NOW()', (err, res) => {
        if (err){
            console.log(err.stack)
        } else{
            console.log(res.rows[0])
        }
    })
})

module.exports = router;