let express = require("express");
let combat_router = express.Router();
const db = require("../models");
//requiring classes
let Paladin = require("../domain/classes/Paladin");
let Cleric = require("../domain/classes/Cleric");
let Wizard = require("../domain/classes/wizard");
let Rogue = require("../domain/classes/Rogue");


combat_router.get("/combat", (req, res) => {
    res.render("combat");
})

module.exports = combat-router;

