'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    middleName: {type: String},
    email: {type: String},
    mobile: {type: String}
});

module.exports = mongoose.model('User', userSchema);