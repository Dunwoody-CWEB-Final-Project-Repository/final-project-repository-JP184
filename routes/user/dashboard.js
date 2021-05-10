const Router = require('express-promise-router')
const router = new Router()
const db = require('../../db');

router.use('/createstoryarc', require('./createstoryarc'));

router.get("/", (req, res) => {
    console.log(req.session.username);
    console.log(req.session.authorized);
    console.log(req.session.role);
    console.log(req.session.id);
    if (req.session.authorized){
        console.log("User dashboard");
        res.render("user/dashboard");
    } else {
        console.log("User not registered, redirecting.");
        res.redirect("/login");
    }
});

router.get("/storyarcs", async (req, res) => {
    if (!req.session.authorized){
        console.log("Unauthorized access, redirecting.");
        res.redirect("/login");
    } else {
        console.log(req.session.username);
        console.log(req.session.authorized);
        console.log(req.session.role);
        console.log(req.session.id);
        console.log("Story Arcs");
        res.render("user/storyarcs");
    }
});

router.get("/worlds", async (req, res) => {
    if (!req.session.authorized){
        console.log("Unauthorized access, redirecting.");
        res.redirect("/login");
    } else {
        console.log(req.session.username);
        console.log(req.session.authorized);
        console.log(req.session.role);
        console.log(req.session.id);
        console.log("Worlds");
        res.render("user/worlds");
    }
});

router.get("/characters", async (req, res) => {

    if (!req.session.authorized){
        console.log("Unauthorized access, redirecting.");
        res.redirect("/login");
    } else {
        console.log(req.session.username);
        console.log(req.session.authorized);
        console.log(req.session.role);
        console.log(req.session.id);
        console.log("Characters");
        res.render("user/characters");

    }
});

router.get('/logout', (req, res) => {
    console.log('Logout initiated.');
    req.session.destroy();
    res.redirect('/login');
})
module.exports = router;