//var db = require("../models/mongooseModel.js")

exports.init = function(app) {
  app.get('/', function(req, res) {
    res.sendfile("views/index.html");
  });

  app.post('/addCommitment', function(req, res) {
    res.send("added succesfully");
  });
}