const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

// Set port
app.set('port', process.env.PORT || 3000)
// Set viewengine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// Require body parser.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))


//Require routes web
app.use('/', require('./routes/web'))

app.listen(app.get('port'), () => {
    console.log("Sever started on port " + app.get('port'))
})