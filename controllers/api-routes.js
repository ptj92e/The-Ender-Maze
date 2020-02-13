let express = require("express");
let router = express.Router();
//requiring classes
let Paladin = require("../domain/classes/Paladin");
let Cleric = require("../domain/classes/Cleric");
let Wizard = require("../domain/classes/wizard");
let Rogue = require("../domain/classes/Rogue");

router.get("/", function (req, res) {
    res.render("welcome");
});

router.get("/characters", function(req, res) {
    res.render("class");
});

router.get("/paladin", function(req, res) {
    res.render("./characters/paladin");
});

router.get("/wizard", function(req, res) {
    res.render("./characters/wizard");
});

router.get("/cleric", function(req, res) {
    res.render("./characters/cleric");
});

router.get("/rogue", function(req, res) {
    res.render("./characters/rogue");
});

router.post("/api/paladin", function(req, res) {
    let paladin = new Paladin(req.body.name);
    console.log(paladin);
});

router.post("/api/cleric", function(req, res) {
    let cleric = new Cleric(req.body.name);
    console.log(cleric);
});

router.post("/api/wizard", function(req, res) {
    let wizard = new Wizard(req.body.name);
    console.log(wizard);
});

router.post("/api/rogue", function(req, res) {
    let rogue = new Rogue(req.body.name);
    console.log(rogue);
});

router.get("/story", function(req, res) {
    res.render("story");
});

module.exports = router;