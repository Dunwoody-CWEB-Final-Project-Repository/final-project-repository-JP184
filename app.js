const express = require('express'); // Allows us to use express framework.
const app = express(); // Reassigns constant var app to act as express().
const path = require("path"); // Allows usage of path shortcuts to easily combine filepaths throughout the website.
const bcrypt = require('bcrypt');
var session = require('express-session'); // Allows the use of sessions through express framework.

function genuuid(){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync('12345', salt);
    return hash;
}

app.set("port", process.env.PORT || 3000); // Sets testing port, Heroku overrides this.
app.set("views", path.join(__dirname, "views")); // Where to find our views.
app.set("view engine", "ejs"); // Sets viewengine to use EJS.

app.use(express.json()); // Allows the use of json within routing framework.
app.use(express.urlencoded({ extended: false })); // Allows access to view data sent through requests easily.
app.use(session({
    genid: function() {
        return uuid = genuuid();
    },
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
// This generates a unique ID using the request.

app.use(express.static(path.join(__dirname + "/public"))); // To be able to access any files in our public folder.
app.use("/", require("./routes/web")); // Access web routes.

app.listen(app.get('port'), function () {
    console.log("Server started on port " + app.get("port"));
}); // Dev purposes, used to listen for port and ensure server is running on specific port.

module.exports = app;