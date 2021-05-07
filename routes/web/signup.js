const Router = require('express-promise-router')
const router = new Router()
const db = require('../../db')
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')



// Routes

router.get('/', (req, res) => {
    res.render('home/signup')
    console.log("Signup")
})

router.post('/',

    [
        check('username')
            .notEmpty()
            .withMessage('Please fill in your uersname.')
            .isLength({ min: 3 })
            .withMessage("Username must contain at least 3 or more characters.")
            .escape()
            .not().contains(['SELECT', 'INSERT', 'UPDATE'], {ignoreCase: true}) // Prevents SQL injection, rejects request and sends error if user attempts to have these words inside of the username.
            .withMessage("Invalid entry, contains blacklisted words!")
            .custom(async (username, { req }) => {
                const checkUser = await db.query("SELECT username FROM userpass WHERE username=$1", [username])
                console.log(req.body.username);
                if (checkUser.rows[0] != null) {
                    throw new Error('Username is used already.')
                }
                return true;
            }),

        check('email')
            .notEmpty()
            .withMessage('Please fill in your email!')
            .isEmail()
            .withMessage('Email is not a valid email.')
            .not().contains(['SELECT', 'INSERT', 'UPDATE'], {ignoreCase: true}) // Prevents SQL injection, rejects request and sends error if user attempts to have these words inside of the username.
            .withMessage("Invalid entry, contains blacklisted words!")
            .custom(async (email, { req }) => {
                const checkEmail = await db.query("SELECT email FROM userpass WHERE email=$1", [email])
                if (checkEmail.rows[0] != null) {
                    throw new Error('Email is in use already.')
                }
                return true;
            })
            .normalizeEmail(),

        check('password')
            .notEmpty()
            .withMessage('Invalid password, please fill in the password field!')
            .isLength({ min: 8 })
            .withMessage('Your password must be at least 8 characters long.')
            .not().contains(['SELECT', 'INSERT', 'UPDATE'], {ignoreCase: true}) // Prevents SQL injection, rejects request and sends error if user attempts to have these words inside of the username.
            .withMessage("Invalid entry, contains blacklisted words!"),
        check('confirmPassword')
            .custom((confirmPassword, { req }) => {
                if (confirmPassword != req.body.password) {
                    throw new Error("Your password confirmation doesn't match your entered password.")
                }
                return true;
            })
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // return res.status(422).jsonp(errors.array())
            console.log(errors);
            const alert = errors.array();
            res.render('home/signup', { alert });
        } else {
            await register(req.body.username, req.body.email, req.body.password);
            console.log("Registration successful");
            res.redirect("/login");
        }
    });

//Functions

async function register(username, email, password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const qUsername = username;
        const qEmail = email;
        const qPassword = await bcrypt.hash(password, salt);
        const registerUser = await db.query("INSERT INTO userpass (username, email, password, created_date) VALUES ($1, $2, $3, NOW())", [qUsername, qEmail, qPassword]);
    } catch (error) {
        console.log(error);
    }

    /*try {
        
    } catch (error) {
        console.log(error);
    }*/
}

module.exports = router;