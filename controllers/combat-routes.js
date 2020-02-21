let express = require("express");
let combat_router = express.Router();
const db = require("../models");
const axios = require("axios");
//requiring classes
let Paladin = require("../domain/classes/Paladin");
let Cleric = require("../domain/classes/Cleric");
let Wizard = require("../domain/classes/wizard");
let Rogue = require("../domain/classes/Rogue");
let Enemy = require("../domain/classes/Enemy");


combat_router.get("/combat/:id", (req, res) => {
    let id = req.params.id;
    db.Hero.findOne({
        raw: true, 
        where: {
            id: id
        }
    }).then(character => {
        axios.get("http://dnd5eapi.co/api/monsters").then(data => {
            
            const name_data = data.data.results;
            // for(let i=0;i<data.data.results.length; i++){
        
            //     enemy_names.push(data.data.results[i].name);
            // }
            let enemy_array = name_data.map(names => {
                return names.name;
            });
            enemy_name = enemy_array[Math.floor(Math.random() * enemy_array.length)];
            
             
            console.log(character);
            switch(character.class){
                case "Wizard": {
                    let wizard = new Wizard(character.name, character.level);
                    let enemy = new Enemy(enemy_name, wizard);
                    res.render("combat", {hero: wizard, enemy: enemy}); 
                }
                break;
    
                case "Rogue": {
                    let rogue = new Rogue(character.name, character.level);
                    let enemy = new Enemy(enemy_name, rogue);
                    res.render("combat", {hero: rogue, enemy: enemy}); 
                }
                break;
    
                case "Paladin": {
                    let paladin = new Paladin(character.name, character.level);
                    let enemy = new Enemy(enemy_name, paladin);
                    res.render("combat", {hero: paladin, enemy: enemy}); 
                }
                break;
    
                case "Cleric": {
                    let cleric = new Cleric(character.name, character.level);
                    let enemy = new Enemy(enemy_name, cleric);
                    res.render("combat", {hero: cleric, enemy: enemy}); 
                }
                break;
    
                default :{
                    res.render("combat");
                }
            }
        });
        
    });
});



module.exports = combat_router;

