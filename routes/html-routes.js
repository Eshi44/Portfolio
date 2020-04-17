// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,'./index.html'));
  });

  // C:\Users\ehame\gt\homework\Portfolio\routes\index.html
  // C:/Users/ehame/gt/homework/Portfolio/public/index.html

  // app.get("/index", function(req, res) {
  //   res.sendFile(path.join(__dirname, "index.html"));
  // });
};