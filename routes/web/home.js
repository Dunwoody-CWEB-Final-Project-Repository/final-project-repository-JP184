const express = require("express");
const router = express.Router();

//Index route
router.get("/", function(req, res){
    console.log("Index to Home");
    res.render("home/home");
});
//Home
router.get("/home", function(req, res){
    console.log("Home");
    res.render("home/home");
});
//About
router.get("/about", function(req, res){
    console.log("About");
    res.render("home/about");
});
//Login
router.use('/login', require('./login'));
//Signup
router.use('/signup', require('./signup'));
// Contact
router.get("/contact", function( req, res){
    console.log("Contact");
    res.render("home/contact");
});
//Support
router.get("/support", function( req, res){
    console.log("Support");
    res.render("home/support");
});
//Who are you
router.get("/whoareyou", function( req, res){
    console.log("Who Are You");
    res.render("home/whoareyou");
});
// Writer
router.get("/whoareyou/writer", function( req, res){
    console.log("wau/writer");
    res.render("home/whoareyou/writer");
});
// WorldBuilder
router.get("/whoareyou/worldbuilder", function( req, res){
    console.log("wau/worldbuilder");
    res.render("home/whoareyou/worldbuilder");
});
// Roleplayer
router.get("/whoareyou/roleplayer", function( req, res){
    console.log("wau/roleplayer");
    res.render("home/whoareyou/roleplayer");
});
// Featers
router.get("/features", function( req, res){
    console.log("Features");
    res.render("home/features");
});

module.exports = router;