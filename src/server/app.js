'use strict';

// Vendor Packages
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res){
    res.send('<h1>Hello World! Restarted</h1>');
});

app.listen(port, function(){
    console.log('Server is running on port: ' + port);
});

