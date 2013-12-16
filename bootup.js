//jshint indent:2
'use strict'
var path = require('path');
var express = require('express');
var http = require('http');
var SERVER_ROOT = __dirname;
//the file
var bootup = function() {
  var app = express();
  app.rootDir = SERVER_ROOT;
  app = require('./server/index.js')(app);


  app.get('/', function(req, res) {
    res.render('index', {
      pageTitle:'Basic Express starter app'
    });
  });



  var server = http.Server(app);

  server.listen(8080);

  return 'server listening on 8080';
};

if (module.exports) {
  module.exports = bootup;
}

bootup();
