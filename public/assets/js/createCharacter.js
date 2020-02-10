const Wizard = require("../../../domain/classes/Wizard");

let wizard1 = new Wizard("Cassidy");

console.log(wizard1);


//just testing the castSpell function on something to see if the damage calculates correctly and updates the targets health correctly. Will actually have Enemy class thats created from a list of enemies, with stats being randomly generated based on user character level
let enemy = {
    name: "Goblin",
    health: 100,
    experience_value: 100
}
wizard1.castSpell("Fireball", enemy);
console.log(`${enemy.name} health: ${enemy.health}`);
console.log(wizard1.experience);


wizard1.gainExperience(enemy.experience_value);
console.log(wizard1); 

