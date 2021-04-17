const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const fs = require('fs')

router.post('/', (req, res, next) => {

    res.render('submit', { username : req.body.username, password : req.body.password })

    const data = {
        username: req.body.username,
        password: req.body.password
    }

    console.log(data.username)
    console.log(data.password)
    console.log(data);

    const newData = JSON.stringify(data)
    console.log(newData)

    fs.writeFile('db/db.json', newData, (err) => {
        if (err){
            console.log(err)
        }
    })
})

module.exports = router;

