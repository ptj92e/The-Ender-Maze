const Wizard = require("../../../domain/classes/Wizard");
const Paladin = require("../../../domain/classes/Paladin");

let wizard1 = new Wizard("Minthel");
let paladin1 = new Paladin("Lorash");

console.log(wizard1);


//just testing the castSpell function on something to see if the damage calculates correctly and updates the targets health correctly. Will actually have Enemy class thats created from a list of enemies, with stats being randomly generated based on user character level
let enemy = {
    name: "Goblin",
    health: 100,
    experience_value: 100,
    speed: 10
}

/**
 * Going to keep below statements in for combat simulation, need to figure out how to actually handle this on the front end, when attacks and such are selected from the menu
 */

//when handling combat, this is how we should do both health pools, so that we don't get repeated decimals (possible to also just round all the damage down and just make everything whole numbers, will get into that when needed, for now will just think of doing it this way)
let enemy_health = enemy.health.toFixed(2);

console.log(`${enemy.name} Health: ${enemy_health}`);
wizard1.castSpell("Fireball", enemy);
console.log(`${enemy.name} Health: ${enemy_health}`);

paladin1.castSpell("Judgement", enemy);
console.log(`${enemy.name} Health: ${enemy_health}`);


wizard1.castSpell("Frostbolt", enemy);
console.log(`${enemy.name} Health: ${enemy_health}`);
console.log(`${enemy.name}'s speed has been reduced to ${enemy.speed}`);

wizard1.basicAttack(wizard1.weapon, enemy);
console.log(`${enemy.name} Health: ${enemy_health}`);