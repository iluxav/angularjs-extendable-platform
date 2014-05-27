
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  engines = require('consolidate'),
  assetmanager = require('assetmanager'),
  path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public');
console.log(__dirname);
app.engine('html', engines.swig);
app.set('view engine', 'html');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use('/public', express.static(path.join(__dirname, '/public')));





// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
}

var assets = require('./assets.json');
assetmanager.init({
    js: assets.js,
    css: assets.css,
    debug: (process.env.NODE_ENV !== 'production'),
    webroot: '/'
});

// Add assets to local variables
app.use(function(req, res, next) {
    res.locals.assets = assetmanager.assets;
    next();
});
/**
 * Routes
 */
app.use(app.router);
// serve index and view partials
app.get('/', routes.index);
app.get('/modules/partialViews/:module/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*.js', function(req,res,next){
    res.setHeader('content-type', 'text/javascript');
    next();
});
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
