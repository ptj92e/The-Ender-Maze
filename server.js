//import express to stand up the server
const express = require("express");
const exphbs = require("express-handlebars");

//invoke express into app so that we can set the server and middleware up
const app = express();

//pull in the connections
const db = require("./models");

//set up dynamic port and set up default port
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));


//sync database, then set server up
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });