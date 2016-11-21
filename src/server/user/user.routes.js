'use strict';

var userCtrl = require('./user.controller')();

module.exports = function (api) {
    
    /* Endpoints for User */
    
    api.get('/users', userCtrl.allUsers);
    api.get('/users/:id', userCtrl.getUserById);
    api.post('/users', userCtrl.createUser);
    api.put('/users/:id', userCtrl.updateUser);
    api.delete('/users', userCtrl.deleteAll)
    api.delete('/users/:id', userCtrl.deleteById)

};