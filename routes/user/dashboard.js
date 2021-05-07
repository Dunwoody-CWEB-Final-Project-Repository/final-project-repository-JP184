const e = require('express');
var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    console.log(req.session.username);
    console.log(req.session.id);
    console.log(req.session.authorized);
    console.log("User dashboard");
    res.render("user/dashboard");
});

module.exports = router;