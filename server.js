const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/routes'));



require("./routes/html-routes.js")(app);

  app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
 