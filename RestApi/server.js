var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
//var book = require('./app/models/Book');

mongoose.connect('mongodb://localhost:27017/LibraryOS');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
//var router = express.Router();              // get an instance of the express Router
var router = require('./routes/bookroute');



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);

console.log('Server listens on port http://localhost:' + port);