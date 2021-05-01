const express = require('express')
const app = express()
const path = require("path")
const session = require('express-session')
const flash = require('connect-flash')

app.set("port", process.env.PORT || 3000); // Sets port.
app.set("views", path.join(__dirname, "views")); // Where to find our views.
app.set("view engine", "ejs"); // Sets viewengine to use EJS.
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/", require("./routes/web")); // Access web routes.
app.use(express.static(path.join(__dirname + "/public"))) // To be able to access any files in our public folder.
app.listen(app.get('port'), function(){
    console.log("Server started on port " + app.get("port"));
});