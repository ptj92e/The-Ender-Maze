let express = require("express");
let router = express.Router();
const db = require("../models");
//requiring classes
let Paladin = require("../domain/classes/Paladin");
let Cleric = require("../domain/classes/Cleric");
let Wizard = require("../domain/classes/wizard");
let Rogue = require("../domain/classes/Rogue");
//Sets the json object to a variable
let level1 = require("../domain/story/level1.json");
//requiring fs to rewrite the json file
let fs = require("fs");

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
    db.Hero.create(paladin).then((newHero) => {

        res.json(newHero);
    });
});

router.get("/api/paladin", (req, res) => {
    //handle the findall request here, figure out a way to actually use the class object, so that the methods are usable, unsure if it will work
});

router.post("/api/cleric", (req, res) => {
    let cleric = new Cleric(req.body.name, 1);
    db.Hero.create(cleric).then((newHero) => {

        res.json(newHero);
    });
});

router.post("/api/wizard", (req, res) => {
    let wizard = new Wizard(req.body.name, 1);
    db.Hero.create(wizard).then((newHero) => {

        res.json(newHero);
    });
});

router.post("/api/rogue", (req, res) => {
    let rogue = new Rogue(req.body.name, 1);
    db.Hero.create(rogue).then((newHero) => {

        res.json(newHero);
    });
});

router.get("/maze", (req, res) => {
    res.render("maze");
});
//route to get the encounter from the json object
router.get("/api/encounter/:id", (req, res) => {
    let encounter = [];
    for (let i = 0; i < level1.Encounters.length; i++) {
        if (level1.Encounters[i].id === parseInt(req.params.id)) {
            encounter = level1.Encounters[i];
        }
    };
    if ((encounter.type === "Puzzle") && (encounter.isCompleted === false)) {
        res.json(encounter);
    } else if ((encounter.type === "Combat") && (encounter.isCompleted === false)) {
        res.json(encounter);
    } else if (encounter.type === "Level Complete") {
        res.json(encounter);
    };
});

router.get("/puzzle/:id", (req, res) => {
    let encounter = [];
    for (let i = 0; i < level1.Encounters.length; i++) {
        if (level1.Encounters[i].id === parseInt(req.params.id)) {
            encounter = level1.Encounters[i];
        }
    };
    res.render("puzzle", { encounter: encounter });
});

router.get("/combat/:id", (req, res) => {
    res.render("combat");
});

router.get("/api/completed/:id", (req, res) => {
    let encounter = [];
    for (let i = 0; i < level1.Encounters.length; i++) {
        if (level1.Encounters[i].id === parseInt(req.params.id)) {
            encounter = level1.Encounters[i];
        }
    };
    console.log(encounter);
});

module.exports = router;