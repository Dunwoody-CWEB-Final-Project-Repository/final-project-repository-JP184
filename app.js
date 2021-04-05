const express = require('express');
const app = express();
const path = require("path");
// const routes = require('./routes');

app.set("port", process.env.PORT || 3000); // Sets port.

app.set("views", path.join(__dirname, "views")); // Where to find our views.
app.set("view engine", "ejs"); // Sets viewengine to use EJS.

app.use("/", require("./routes/web")); // Access web routes.
app.use("/api", require("./routes/api")); // Access api routes.
app.use(express.static(path.join(__dirname + "/public"))) // To be able to access any files in our public folder.

app.listen(app.get('port'), function(){
    console.log("Server started on port " + app.get("port"));
}); // Runs to detect what port the server is running on.

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send('Created User');
});