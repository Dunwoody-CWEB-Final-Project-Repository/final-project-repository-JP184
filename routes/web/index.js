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

router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('home/db', results );
      console.log(results)
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  });