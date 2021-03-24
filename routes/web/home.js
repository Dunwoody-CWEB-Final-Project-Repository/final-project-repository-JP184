const express = require("express");
const router = express.Router();
//Index route
router.get("/", function(req, res){
    
    console.log("Index");
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
    res.render("home/login");
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
    res.render("home/Support");
});

router.get("/whoareyou", function( req, res){
    console.log("Who Are You");
    res.render("home/whoareyou");
});
module.exports = router;