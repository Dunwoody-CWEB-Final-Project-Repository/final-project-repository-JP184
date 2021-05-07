const Router = require('express-promise-router');
const router = new Router();
const db = require('../../db');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    res.render('home/login');
})

router.post('/',
    [
        check('username')
            .notEmpty()
            .withMessage('Please fill in your username.')
            .escape()
            .isLength({ min: 3 })
            .withMessage("Username must contain at least 3 or more characters.")
            .not().contains(['SELECT', 'INSERT', 'UPDATE'], { ignoreCase: true }) // Prevents SQL injection, rejects request and sends error if user attempts to have these words inside of the username.
            .withMessage("Invalid entry, contains blacklisted words!")
            .custom(async (username, { req }) => {
                console.log(username);
                const checkUser = await db.query("SELECT username FROM userpass WHERE username=$1", [username])
                console.log(checkUser.rows[0])
                if (checkUser.rows[0] == null) {
                    throw new Error('This username does not exist.')
                }
                return true;
            }),

        check('password')
            .notEmpty()
            .withMessage("Invalid password entry, please fill in the password field!")
            .isLength({ min: 8 })
            .withMessage("Invalid password, try again.")
            .not().contains(['SELECT', 'INSERT', 'UPDATE'], { ignoreCase: true }) // Prevents SQL injection, rejects request and sends error if user attempts to have these words inside of the username.
            .withMessage("Invalid entry, contains blacklisted words!")
            .custom(async (password, { req }) => {
                const getPass = await db.query("SELECT password FROM userpass WHERE username=$1", [req.body.username])
                hashedPassword = getPass.rows[0].password;
                const checkPass = await bcrypt.compare(password, hashedPassword)
                if (!checkPass) {
                    throw new Error("Invalid password.");
                }
                return true;
            })
    ],
    
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            const alert = errors.array();
            res.render('home/login', { alert });
        } else {
            req.session.username = req.body.username;
            console.log("Login successful.");
            res.redirect('/home');
        }
    });

module.exports = router;