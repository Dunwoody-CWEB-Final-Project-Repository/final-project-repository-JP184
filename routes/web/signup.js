const express = require("express")
const router = express.Router()
const db = require('../../db')
const bcrypt = require('bcrypt')

express.use

const users = []

router.get('/', (req, res) => {
    res.render('home/signup')
})

router.post('/', (req, res, next) => {
    db.query('SELECT * FROM test_table', null, (err, res) => {
        if (err) {
            return next(err)
        }
        res.render(res.rows[0])
    })
})

module.exports = router;