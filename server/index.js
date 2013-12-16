'use strict';

var path = require('path');

module.exports = function(app) {
  app = require('./lib/server.js')(app);

  return app;
};
