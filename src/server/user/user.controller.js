'use strict';

var User = require('./user.model');

module.exports = function () {

    var controller = {
        allUsers: allUsers,
        createUser: createUser,
        deleteAll: deleteAll,
        deleteById: deleteById,
        getUserById: getUserById,
        updateUser: updateUser
    };

    return controller;

    //////////

    function allUsers(req, res, next) {

        User.find({}, function (err, results) {
            if (err) {
                next(err);
                return;
            }

            res.json(results);
        });

    }

    function createUser(req, res, next) {

        var newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            middleName: req.body.middleName,
            email: req.body.email,
            mobile: req.body.mobile
        });

        newUser.save(function (err, user) {
            if (err) {
                next(err);
                return;
            }

            res.json(user);
        });

    }

    function deleteAll(req, res, next) {

        User.remove({}, function (err) {
            if (err) {
                next(err);
                return;
            }

            res.json({
                success: true
            });
        });

    }

    function deleteById(req, res, next) {

        User.remove({
            _id: req.params.id
        }, function (err) {
            if (err) {
                next(err);
                return;
            }

            res.json({
                success: true
            });
        });

    }

    function getUserById(req, res, next) {

        User.findOne({
            _id: req.params.id
        }, function (err, results) {
            if (err) {
                next(err);
                return;
            }

            res.json(results);
        });

    }

    function updateUser(req, res, next) {
        User.findOne({
            _id: req.params.id
        }, function (err, results) {
            if (err) {
                next(err);
                return;
            }

            results.firstName = req.body.firstName;
            results.lastName = req.body.lastName;
            results.middleName = req.body.middleName;
            results.email = req.body.email;
            results.mobile = req.body.mobile;

            results.save(function(err){
                if (err) {
                    next(err);
                    return;
                } 
            
                res.json(results);
            });
            
        });
    }

};