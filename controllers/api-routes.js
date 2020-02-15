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
//requiring fs to rewrite the json file
let fs = require("fs");

api_router.get("/",  (req, res) => {
    res.render("welcome");
});

api_router.get("/characters", (req, res) => {
    res.render("class");
});

api_router.get("/paladin", (req, res) => {
    res.render("./characters/paladin");
});

api_router.get("/wizard", (req, res) => {
    res.render("./characters/wizard");
});

api_router.get("/cleric", (req, res) => {
    res.render("./characters/cleric");
});

api_router.get("/rogue", (req, res) => {
    res.render("./characters/rogue");
});

api_router.post("/api/paladin", (req, res) => {
    let paladin = new Paladin(req.body.name, 1);
    db.Hero.create(paladin).then((newHero) => {

        res.json(newHero);
    });
});

api_router.get("/api/paladin", (req, res) => {
    //handle the findall request here, figure out a way to actually use the class object, so that the methods are usable, unsure if it will work
});

api_router.post("/api/cleric", (req, res) => {
    let cleric = new Cleric(req.body.name, 1);
    db.Hero.create(cleric).then((newHero) => {

        res.json(newHero);
    });
});


api_router.post("/api/wizard", (req, res) => {
    let wizard = new Wizard(req.body.name, 1);
    db.Hero.create(wizard).then((newHero) => {

        res.json(newHero);
    });
});

api_router.post("/api/rogue", (req, res) => {
    let rogue = new Rogue(req.body.name, 1);
    db.Hero.create(rogue).then((newHero) => {

        res.json(newHero);
    });
});

api_router.get("/maze", (req, res) => {
    //add id parameter for me to perform a findOne where id = param.id, so i can pump values into the maze handlebars for stats and name
    res.render("maze");
});
//route to get the encounter from the json object
api_router.get("/api/encounter/:id", (req, res) => {
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

api_router.get("/puzzle/:id", (req, res) => {
    let encounter = [];
    for (let i = 0; i < level1.Encounters.length; i++) {
        if (level1.Encounters[i].id === parseInt(req.params.id)) {
            encounter = level1.Encounters[i];
        }
    };
    res.render("puzzle", { encounter: encounter });
});

api_router.get("/combat/:id", (req, res) => {
    res.render("combat");
});

api_router.get("/api/completed/:id", (req, res) => {
    let encounter = [];
    for (let i = 0; i < level1.Encounters.length; i++) {
        if (level1.Encounters[i].id === parseInt(req.params.id)) {
            encounter = level1.Encounters[i];
        }
    };
    encounter.isCompleted = true;
    res.json(encounter);
});

module.exports = api_router;