const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

let User = require('../models/user.model');

// secret key for token
process.env.SECRET_KEY = 'secret'

//signup form
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// signup post
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const role = req.body.role;

    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.json({ err: "User already Exists" });
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const newUser = new User({
                        username: username,
                        email: email,
                        password: hashedPassword,
                        cart: { items: [] },
                        role: role
                    });

                    return newUser.save();
                })
                .then(() => res.json('User added!'))

        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// signin post
router.route('/login').post((req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    // password match
                    const payload = {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                    }
                    /**
 * Sign the given payload into a JSON Web Token string
 * payload - Payload to sign, could be an literal, buffer or string
 * secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
  * callback - Callback to get the encoded token on
 */
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                    //console.log(token)
                } else {
                    //password don`t match 
                    res.json({ err: "User does not exist" })
                }
            } else {
                res.json({ err: "User does not exist" })
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;