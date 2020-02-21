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

api_router.get("/", (req, res) => {
    res.render("welcome");
});

api_router.get("/class", (req, res) => {
    res.render("class");
});

api_router.get("/characters", (req, res) => {

    db.Hero.findAll({ raw: true }).then(data => {

        res.render("characters", { characters: data });
    })
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
    db.Hero.create({
        name: paladin.name,
        level: paladin.level,
        class: paladin.class
    }).then((newHero) => {

        res.json(newHero);
    });
});

api_router.get("/api/paladin", (req, res) => {
    //handle the findall request here, figure out a way to actually use the class object, so that the methods are usable, unsure if it will work
});

api_router.post("/api/cleric", (req, res) => {
    let cleric = new Cleric(req.body.name, 1);
    db.Hero.create({
        name: cleric.name,
        level: cleric.level,
        class: cleric.class
    }).then((newHero) => {

        res.json(newHero);
    });
});


api_router.post("/api/wizard", (req, res) => {
    let wizard = new Wizard(req.body.name, 1);
    db.Hero.create({
        name: wizard.name,
        level: wizard.level,
        class: wizard.class
    }).then((newHero) => {

        res.json(newHero);
    });
});

api_router.post("/api/rogue", (req, res) => {
    let rogue = new Rogue(req.body.name, 1);
    db.Hero.create({
        name: rogue.name,
        level: rogue.level,
        class: rogue.class
    }).then((newHero) => {

        res.json(newHero);
    });
});

api_router.get("/maze/:id", (req, res) => {
    //add id parameter for me to perform a findOne where id = param.id, so i can pump values into the maze handlebars for stats and name
    let id = req.params.id;
    db.Hero.findOne({
        raw: true,
        where: {
            id: id
        }
    }).then(character => {
        console.log(character);
        switch (character.class) {
            case "Wizard": {
                let wizard = new Wizard(character.name, character.level);
                res.render("maze", { hero: wizard, character: character }
                );
            }
                break;

            case "Rogue": {
                let rogue = new Rogue(character.name, character.level);
                res.render("maze", { hero: rogue, character: character });
            }
                break;

            case "Paladin": {
                let paladin = new Paladin(character.name, character.level);
                res.render("maze", { hero: paladin, character: character });
            }
                break;

            case "Cleric": {
                let cleric = new Cleric(character.name, character.level);
                res.render("maze", { hero: cleric, character: character });
            }
                break;

            default: {
                res.render("maze");
            }
        }
    });
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

api_router.get("/puzzle/:id&:character_id", (req, res) => {
    let character_id = req.params.character_id;
    console.log(character_id);
    let puzzle = [];
    for (let i = 0; i < level1.Encounters.length; i++) {
        if (level1.Encounters[i].id === parseInt(req.params.id)) {
            puzzle = level1.Encounters[i];
        }
    };
    res.render("puzzle", { encounter: { puzzle, character_id } });

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

api_router.get("/newlevel/:id", (req, res) => {
    let encounter = [];
    for (let i = 0; i < level1.Encounters.length; i++) {
        if (level1.Encounters[i].id === parseInt(req.params.id)) {
            encounter = level1.Encounters[i];
        }
    };
    res.render("complete", { encounter: encounter });
});

api_router.put("/api/resetMaze", (req, res) => {
    for(let i = 0; i < level1.Encounters.length; i++){
        level1.Encounters[i].isCompleted = req.body;
    }
})

module.exports = api_router;