// The below was done first and then replaced by lines 7 and 8
// let express = require('express');
// let router = express.Router();
// let sequelize = require('../db');
// let User = sequelize.import('../models/user.js');

const router = require('express').Router();
const User = require("../db").import("../models/user.js");
//Create a new endpoint : /create
//The endpoint is going to be a post request
//Have an object that matches the model of UserTable (email/password).
//Let sequelize create a new record in the database (create)
router.post('/create', function(req, res) {
        
    let userModel = {
        email: req.body.user.email,
        password: req.body.user.password,
    };
    User.create(userModel).then(function(user){
        let responseObject = {
            user: user,
        };
        res.json(responseObject);
    })
    .catch(function(err){
        res.status(500).json({error: err});
    });

});

//USER SIGNIN
//Create a new endpoint : /login
//The endpoint is going to be a post request
//Build a query statement (Hard code in a user's email that exists in your database)
//Use FindOne
//Let sequelize return a success
//if we find one return user info and if user doesn't exist return "user does not exist"
router.post('/login', function(req, res) {
    User.findOne({ where: {email: "test3@test.com"}})
        .then(function(user){
            res.json({user: user})
        });
});
module.exports = router;