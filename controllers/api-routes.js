let express = require("express");
let api_router = express.Router();
const db = require("../models");
//requiring classes
let Paladin = require("../domain/classes/Paladin");
let Cleric = require("../domain/classes/Cleric");
let Wizard = require("../domain/classes/wizard");
let Rogue = require("../domain/classes/Rogue");
//Sets the json object to a variable
let level1 = require("../domain/story/level1.json");

api-router.get("/",  (req, res) => {
    res.render("welcome");
});

api-router.get("/characters", (req, res) => {
    res.render("class");
});

api-router.get("/paladin", (req, res) => {
    res.render("./characters/paladin");
});

api-router.get("/wizard", (req, res) => {
    res.render("./characters/wizard");
});

api-router.get("/cleric", (req, res) => {
    res.render("./characters/cleric");
});

api-router.get("/rogue", (req, res) => {
    res.render("./characters/rogue");
});

api-router.post("/api/paladin", (req, res) => {
    let paladin = new Paladin(req.body.name, 1);
    db.Hero.create(paladin).then((newHero) => {

        res.json(newHero);
    });
});

api-router.get("/api/paladin", (req, res) => {
    //handle the findall request here, figure out a way to actually use the class object, so that the methods are usable, unsure if it will work
});

api-router.post("/api/cleric", (req, res) => {
    let cleric = new Cleric(req.body.name, 1);
    db.Hero.create(cleric).then((newHero) => {

        res.json(newHero);
    });
});

api-router.post("/api/wizard", (req, res) => {
    let wizard = new Wizard(req.body.name, 1);
    db.Hero.create(wizard).then((newHero) => {

        res.json(newHero);
    });
});

api-router.post("/api/rogue", (req, res) => {
    let rogue = new Rogue(req.body.name, 1);
    db.Hero.create(rogue).then((newHero) => {

        res.json(newHero);
    });
});

api-router.get("/story", (req, res) => {
    res.render("story");
});
//route to get the encounter from the json object
api-router.get("/api/encounter", (req, res) => {
    res.json(level1);
});

module.exports = api_router;