//var db = require("../models/mongooseModel.js")

exports.init = function(app) {
  app.get('/calender', function(req, res) {
    res.send("a calender");
  });

  app.get('/getFeed', function(req, res) {
    res.send("here are some images");
  });
}
