//var db = require("../models/mongooseModel.js")

exports.init = function(app) {
  app.get('/', function(req, res) {
    res.sendfile("views/homepage.html");
  });

  app.get('/addpage', function(req, res) {
    res.sendfile("views/add_page.html");
  });

  app.post('/addCommitment', function(req, res) {
    res.send("added succesfully");
  });
}