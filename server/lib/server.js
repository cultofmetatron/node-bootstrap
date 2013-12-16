
var path = require('path');
module.exports = function(app) {
  app = require('./load-middleware.js')(app);

  return app;
};
