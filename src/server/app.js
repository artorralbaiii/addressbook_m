'use strict';

// Vendor Packages
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var compress = require('compression');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');

var config = require('./app.config')();
var port = process.env.PORT || 3000;
var environment = process.env.NODE_ENV;
var errorHandler = require('./routes/utils/errorHandler')();
var app = express();

// Database Connection
mongoose.connect(config.db, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database...');
    }
});

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(errorHandler.init);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

// API Router
var api = require('./routes/index.js')(express);
app.use('/api', api);

switch (environment) {
case 'build':
    console.log('** BUILD **');
    app.use(express.static('./build/'));
    app.use('/*', express.static('./build/index.html'));
    break;
default:
    console.log('** DEV **');
    app.use(express.static('./src/client/'));
    app.use('/*', express.static('./src/client/index.html'));
    break;
}

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});