const express = require("express");
const router = express.Router();
const db = require('../../db')
const passport = require('passport')

router.get('/', (req, res) => {
    res.render('home/login')
})

router.post('/', (req, res) => {
    console.log(req.body.username)
})

module.exports = router;