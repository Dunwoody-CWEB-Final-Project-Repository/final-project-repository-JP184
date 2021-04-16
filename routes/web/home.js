const express = require("express");
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

//Index route
router.get("/", function(req, res){
    
    console.log("Index to Home");
    res.render("home/home");
});

router.get("/home", function(req, res){
    console.log("Home");
    res.render("home/home");
});
router.get("/about", function(req, res){
    console.log("About");
    res.render("home/about");
});

router.get("/login", function(req, res){
    console.log("Login");
    res.render("home/login.ejs");
});

router.get("/signup", function(req, res){
    console.log("Signup");
    res.render("home/signup");
});

router.get("/contact", function( req, res){
    console.log("Contact");
    res.render("home/contact");
});


router.get("/support", function( req, res){
    console.log("Support");
    res.render("home/support");
});

router.get("/whoareyou", function( req, res){
    console.log("Who Are You");
    res.render("home/whoareyou");
});

router.get("/whoareyou/writer", function( req, res){
    console.log("wau/writer");
    res.render("home/whoareyou/writer");
});

router.get("/whoareyou/worldbuilder", function( req, res){
    console.log("wau/worldbuilder");
    res.render("home/whoareyou/worldbuilder");
});

router.get("/whoareyou/roleplayer", function( req, res){
    console.log("wau/roleplayer");
    res.render("home/whoareyou/roleplayer");
});

router.get("/features", function( req, res){
    console.log("Features");
    res.render("home/features");
});

router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

module.exports = router;