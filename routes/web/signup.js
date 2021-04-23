const express = require("express");
const router = express.Router();
const db = require('../../db')

router.get('/', (req, res) => {
    res.render('home/signup')
})

router.post('/', (req, res) => {
    console.log('LOLOLOLOL')
})

module.exports = router;