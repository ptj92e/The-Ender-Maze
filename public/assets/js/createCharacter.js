const Wizard = require("../../../domain/classes/Wizard");
const Paladin = require("../../../domain/classes/Paladin");

let wizard1 = new Wizard("Minthel");
let paladin1 = new Paladin("Lorash");

console.log(wizard1);
console.log(paladin1);

//just testing the castSpell function on something to see if the damage calculates correctly and updates the targets health correctly. Will actually have Enemy class thats created from a list of enemies, with stats being randomly generated based on user character level
let enemy = {
    name: "Goblin",
    health: 100,
    experience_value: 100
}


