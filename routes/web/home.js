const express = require("express");
const router = express.Router();

//Index route
router.get("/", function(req, res){
    
    console.log("Index");
    res.render("home/");
});

// Home route.
router.get("/home", function(req, res){
    console.log("Home");
    res.render("home/home")
});

router.get("/about", function(req, res){
    console.log("About");
    res.render("home/about")
})
module.exports = router;