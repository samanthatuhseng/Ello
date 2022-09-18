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
    username = username.trim();
    email = email.trim();
    password = password.trim();
    role = role.trim();

    console.log("gi");
    console.log(username, "user");
    if (username == '' || email == '' || password == '' || role == '') {
        res.json({
            status: "Failed",
            message: "Empty Input Fields!"
        });
    } else if (!(/^[A-Za-z]+$/).test(username)) {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        })
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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
                console.log("no user found");
                // password handler 
                const saltRounds = 10;
                console.log(password, "password");
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        username,
                        email,
                        password: hashedPassword,
                        role
                    });
                    console.log("new user");
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

//signin

router.post('/signin', (req, res) => {
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();

    if (email == '' || password == "") {
        res.json({
            status: "Failed",
            message: "empty credentials supplied"
        })
    } else {
        //check if user exist
        User.find({ email })
            .then(data => {
                //user exists
                if (data) {
                    const hashedPassword = data[0].password;
                    bcrypt.compare(password, hashedPassword).then(result => {
                        if (result) {
                            //password match
                            res.json({
                                status: "SUCESS",
                                message: "Signin successful",
                                data: data
                            })
                        } else {
                            res.json({
                                status: "Failed",
                                message: "invalid password entered"
                            })
                        }
                    })
                        .catch(err => {
                            res.json({
                                status: "FAILED",
                                message: "An error occured while comparing passwords"
                            })
                        })
                } else {
                    res.json({
                        status:"failed",
                        message: "invald credentials"
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: "FAILED",
                    message:"an error occured while checking for existing user"
                })
            })
        }
    })

module.exports = router;