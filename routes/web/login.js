const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res, next) => {

    const formData = {
        username: req.body.username,
        password: req.body.password
    }

    console.log(formData)

    try{
        const jsonString = fs.readFileSync('db/db.json', 'utf-8')
        const comparedData = JSON.parse(jsonString)
        console.log(comparedData)
        if (formData.username == comparedData.username && formData.password == comparedData.password)
        {
            res.render('dashboard')
        }
        else{
            res.render('loginfailed')
        }
    } catch (err) {
        console.log(err)
    }

})

module.exports = router;

