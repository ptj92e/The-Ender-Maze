let express = require("express");
let router = express.Router();
const db = require("../models");
//requiring classes
let Paladin = require("../domain/classes/Paladin");
let Cleric = require("../domain/classes/Cleric");
let Wizard = require("../domain/classes/wizard");
let Rogue = require("../domain/classes/Rogue");

router.get("/",  (req, res) => {
    res.render("welcome");
});

router.get("/characters", (req, res) => {
    res.render("class");
});

router.get("/paladin", (req, res) => {
    res.render("./characters/paladin");
});

router.get("/wizard", (req, res) => {
    res.render("./characters/wizard");
});

router.get("/cleric", (req, res) => {
    res.render("./characters/cleric");
});

router.get("/rogue", (req, res) => {
    res.render("./characters/rogue");
});

router.post("/api/paladin", (req, res) => {
    let paladin = new Paladin(req.body.name, 1);
    console.log(paladin);
    
    db.Hero.create(paladin).then((newHero) => {

        res.json(newHero);
    });
});

router.get("/api/paladin", (req, res) => {
    //handle the findall request here, figure out a way to actually use the class object, so that the methods are usable, unsure if it will work
});

router.post("/api/cleric", (req, res) => {
    let cleric = new Cleric(req.body.name, 1);
    console.log(cleric);
    db.Hero.create(cleric).then((newHero) => {

        res.json(newHero);
    });
});

router.post("/api/wizard", (req, res) => {
    let wizard = new Wizard(req.body.name, 1);
    console.log(wizard);
    db.Hero.create(wizard).then((newHero) => {

        res.json(newHero);
    });
});

router.post("/api/rogue", (req, res) => {
    let rogue = new Rogue(req.body.name, 1);
    console.log(rogue);
    db.Hero.create(rogue).then((newHero) => {

        res.json(newHero);
    });
});

router.get("/story", (req, res) => {
    res.render("story");
});

module.exports = router;