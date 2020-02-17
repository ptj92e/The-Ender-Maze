let express = require("express");
let combat_router = express.Router();
const db = require("../models");
//requiring classes
let Paladin = require("../domain/classes/Paladin");
let Cleric = require("../domain/classes/Cleric");
let Wizard = require("../domain/classes/wizard");
let Rogue = require("../domain/classes/Rogue");


combat_router.get("/combat/:id", (req, res) => {
    let id = req.params.id;
    db.Hero.findOne({
        raw: true, 
        where: {
            id: id
        }
    }).then(character => {
        console.log(character);
        switch(character.class){
            case "Wizard": {
                let wizard = new Wizard(character.name, character.level);
                res.render("combat", wizard); 
            }
            break;

            case "Rogue": {
                let rogue = new Rogue(character.name, character.level);
                res.render("combat", rogue);
            }
            break;

            case "Paladin": {
                let paladin = new Paladin(character.name, character.level);
                res.render("combat", paladin);
            }
            break;

            case "Cleric": {
                let cleric = new Cleric(character.name, character.level);
                res.render("combat", cleric);
            }
            break;

            default :{
                res.render("combat");
            }
        }
        
    });
});



module.exports = combat_router;

