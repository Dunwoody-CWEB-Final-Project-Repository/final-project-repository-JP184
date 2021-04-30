const express = require("express");
const router = express.Router();
const db = require('../../db')

router.get('/', (req, res) => {
    res.render('home/signup')
})

router.post('/', (req, res, next) => {
    try{
        db.query('SELECT ', (err, res) => {
            if (err) {
                return next(err)
            }
            console.log(res.rows[0])
        })
    } catch(ex){

    }
})

module.exports = router;