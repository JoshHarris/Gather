var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    routes = require('./server/routes/index'),
    gatherings = require('./server/routes/gatherings'), //routes are defined here
    app = express(); //Create the Express app





//connect to our database
//Ideally you will obtain DB details from a config file
var dbName = 'gatherDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);


// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

app.use('/', routes);
app.use('/api', gatherings); //This is our route middleware


/// catch 404 and forwarding to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
///// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});

// Listener
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;