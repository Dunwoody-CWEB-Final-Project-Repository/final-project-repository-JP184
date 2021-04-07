const express = require('express');
const app = express();
const path = require("path");
const router = express.router();
// const routes = require('./routes');

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.set("port", process.env.PORT || 3000); // Sets port.

app.set("views", path.join(__dirname, "views")); // Where to find our views.
app.set("view engine", "ejs"); // Sets viewengine to use EJS.

app.use("/", require("./routes/web")); // Access web routes.
app.use("/api", require("./routes/api")); // Access api routes.
app.use(express.static(path.join(__dirname + "/public"))) // To be able to access any files in our public folder.

app.listen(app.get('port'), function(){
    console.log("Server started on port " + app.get("port"));
}); // Runs to detect what port the server is running on.

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send('Created User');
});

router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('home/db', results );
      console.log('')
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  });