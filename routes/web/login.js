const express = require("express");
const router = express.Router();
const db = require('../../db')

router.get('/', (req, res) => {
    res.render('home/login')
})

router.post('/', (req, res, next) => {
    db.query('SELECT * FROM test_table', (err, res) => {
        if (err) {
            return next(err)
        }
        console.log(res.rows[0])
    })
})
module.exports = router;