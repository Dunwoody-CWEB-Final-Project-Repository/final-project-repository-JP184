const { json } = require('body-parser');
const Router = require('express-promise-router')
const router = new Router()
const db = require('../../db');

router.get('/', (req, res, next) => {
    if (!req.session.authorized){
        console.log("Unauthorized access, redirecting.");
        res.redirect("/login");
    } else {
        console.log(req.session.username);
        console.log(req.session.authorized);
        console.log(req.session.role);
        console.log(req.session.id);
        console.log("Create Story Arc");
        res.render("user/createstoryarc");
    }
});

router.post('/', async (req, res, next) => {
    /*try {
        const addStoryArc = await db.query("INSERT INTO storyarcs (username, data, title) VALUES ($1, $2, $3)", ['admin', req.body.editorData]);
        console.log(addStoryArc);
        res.redirect(301, '/');
    } catch (error) {
        console.log(error)
    }*/
    console.log(req.body);
})

module.exports = router;