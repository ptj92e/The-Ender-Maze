const Character = require("./character");

class Rogue extends Character {
    constructor(name, level){
        
        super(name, level);
        this.intellect = 8 + level;
        this.strength = 10 + level;
        this.agility = 15 + (level * 2);
        this.stamina = 12 + level;
        this.speed = 10 + (level * 2);
        this.max_health = this.base_health + (this.stamina * 10);

        //come back to this when there is time, consider giving weapons properties like damage and such, so the damage calculation with basic attack isnt just a static number, and can be calculated without a switch statements with cases for every weapon
        this.weapon = "Dirk";
        this.class = "Rogue";
    }

    
    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed
    
    For the rogue, not sure what to do in terms of spells, so maybe won't have any at the start. But once I can figure out how to apply DoTs and have them tick, could have poisonWeapon() or something? just templating this out so I can come back when I have more to work with.
    */
   castSpell(spell, target){
       switch(spell){
           //for now this will remain blank, but think of adding something like stealth, or some sort of vanish/quiet mechanic, maybe something that raises dodge based off this.agility

       }
   }

   //melee moves here, calculate damage based on agility, (maybe some small percentage of strength eventually, but for now just agility)
   meleeAttack(ability, target){
       switch(ability){
            case "Shiv": {
                let damage = 11 + ((this.strength + this.agility) * 0.2);
            }
            break;

            default: {
                return;
            }
       }
   }

   //basic weapon attack
   basicAttack(weapon, target){
       switch(weapon){
            case "Dirk": {
                let wep_damage = 8 + ((this.strength + this.agility) * 0.1);

                console.log(`${weapon} damage: ${wep_damage}`);
                target.health -= damage;
                console.log(`${this.name} does ${wep_damage} damage to ${target.name}`);

            }
            break;

            default: {
                return;
            }
       }
   }

   //rogue levelup override, speed and agility the main stats here
  
}

module.exports = Rogue;