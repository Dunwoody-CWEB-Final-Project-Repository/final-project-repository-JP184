const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/createaccount', (req, res) => {
    res.render('createaccount')
})

router.use('/submit', require('./submit'))

router.use('/login', require('./login'))

module.exports = router;