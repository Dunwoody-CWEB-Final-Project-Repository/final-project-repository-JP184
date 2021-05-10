var express = require('express');
var router = express.Router();

//Index route
router.get("/", function(req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("Home");
        res.render('home/home');
    }
});
//Home
router.get("/home", function(req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("Home");
        res.render('home/home');
    }
});
//About
router.get("/about", function(req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("About");
        res.render('home/about');
    }
});
//Login
router.use('/login', require('./login'));
//Signup
router.use('/signup', require('./signup'));
// Contact
router.get("/contact", function( req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("Contact");
        res.render('home/contact');
    }
});
//Support
router.get("/support", function( req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("Support");
        res.render('home/support');
    }
});
//Who are you
router.get("/whoareyou", function( req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("Who Are You");
        res.render('home/whoareyou');
    }
});
// Writer
router.get("/whoareyou/writer", function( req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("WAU/Writer");
        res.render('home/writer');
    }
});
// WorldBuilder
router.get("/whoareyou/worldbuilder", function( req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("WAU/Worldbuilder");
        res.render('home/worldbuilder');
    }
});
// Roleplayer
router.get("/whoareyou/roleplayer", function( req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("WAU/Roleplayer");
        res.render('home/roleplayer');
    }
});
// Features
router.get("/features", function( req, res){
    if (req.session.authorized){
        res.redirect("/dashboard");
    } else {
        console.log("Features");
        res.render('home/features');
    }
});


module.exports = router;