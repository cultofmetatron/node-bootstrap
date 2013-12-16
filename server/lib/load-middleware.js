var path = require('path');
var express = require('express');
module.exports = function(app) {
  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(app.rootDir, 'client','views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(app.rootDir, 'frontend', 'public')));

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  return app;
};
