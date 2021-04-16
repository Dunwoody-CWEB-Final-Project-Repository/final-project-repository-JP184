const express = require("express");
const router = express.Router();
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

router.get('/', function (req, res) {
  try{
    const client = await pool.connect()
    const query = await client.query('SELECT * FROM test_table');
    const result = {'result': (query) ? result.rows : null}
    res.render(JSON.stringify(result))
    client.release()
  } catch (err) {
    console.error(err)
    res.send("Error " + err)
  }
})

module.exports = router;