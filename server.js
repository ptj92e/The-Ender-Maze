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

//allows the app to use handlebars.js
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

//getting environtment variables
require('dotenv').config();

//requires api-routes for the server to use
let api_routes = require("./controllers/api-routes");
let combat_routes = require("./controllers/combat-routes");
app.use(api_routes);
app.use(combat_routes);


//sync database, then set server up
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });