const express = require('express');

const router = express.Router();

//Index route
router.get("/", function(req, res){
    
    console.log("Index");
    res.render("home/index");
});

// Home route.
router.get("/home", function(req, res){
    console.log("Home");
    res.render("home/home")
});
module.exports = router;