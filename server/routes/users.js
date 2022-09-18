const router = require('express').Router();
let User = require('../models/user.model.js');

// endpoint handles incoming HTTP GET requests on the /users/ URL path
router.route('/').get((req, res) => {
    //to get a list of all the users from the database
    User.find()
        //results are returned in JSON format with res.json(users)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// // handles incoming HTTP POST requests on the /users/add/ URL path.
// router.route('/add').post((req, res) => {
//     //new username is part of the request bod
//     const username = req.body.username;
//     const role = req.body.role;
//     const email = req.body.email;

//     // create a new instance of User
//     const newUser = new User({ username, role, email });

//     // new user is saved to the database with the save() method
//     newUser.save()
//         .then(() => res.json('User added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// password handler
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
    let { username, email, password, role } = req.body;
    username = username.trim;
    email = email.trim;
    password = password.trim;
    role = role.trim;

    if (username == '' || email == '' || password == '' || role == '') {
        res.json({
            status: "Failed",
            message: "Empty Input Fields!"
        });
    } else if ((/^[A-Za-z]+$/).test(username)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    } else {
        User.find({ email }).then(result => {
            if (result.length) {
                // if user already exists
                res.json({
                    status: "FAILED",
                    message: "User with provided email already exists!"
                })
            } else {
                // try create user

                // password handler 
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        username,
                        email,
                        password: hashedPassword,
                        role
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Sign up successful",
                            data: result,
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "Error occured while saving user account"
                        })
                    })
                })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "Error occured while hashing password!"
                        })
                    })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "Error occured while checkign for existing user!"
            })
        })
    }
})

module.exports = router;