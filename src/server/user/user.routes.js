'use strict';

module.exports = function (app) {
    app.get('/users', function (req, res) {
        res.send('<h1>User Resource</h1>');
    });
}