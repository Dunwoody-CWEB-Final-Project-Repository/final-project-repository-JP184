const { Pool } = require('pg')

const pool = new Pool({
  user: "postgres",
  password: "184752",
  host: "localhost",
  port: 5432,
  database: "mylocaldb"
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}