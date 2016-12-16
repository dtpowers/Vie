var express = require('express');
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

// Define how to log events
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
  // Load all routes in the routes directory
fs.readdirSync('./routes').forEach(function(file) {
  // There might be non-js files in the directory that should not be loaded
  if (path.extname(file) == '.js') {
    console.log("Adding routes in " + file);
    require('./routes/' + file).init(app);
  }
});


// Handle static files
app.use(express.static(__dirname + '/public'));



// Catch any routes not already handed with an error message
app.use(function(req, res) {
  var message = 'Error, did not understand path ' + req.path;
  // Set the status to 404 not found, and render a message to the user.
  res.status(404).render('error', {
    'message': message
  });
});

$(document).foundation()

app.listen(3000, function() {
  console.log('Ready to start helping people manage their time!');
});