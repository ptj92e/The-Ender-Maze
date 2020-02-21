const Character = require("./Character");

class Cleric extends Character {
    constructor(name, level){
        super(name, level);
        this.intellect = 12 + (level * 2);
        this.strength = 8 + level;
        this.agility = 8 + level;
        this.stamina = 12 + (level * 2);
        this.speed = 10 + level;
        this.max_health = this.base_health + (this.stamina * 10);
        //like the other classes, definitely work in weapon properties, so damage with melee skills/basic attacks can be calculated off of that, instead of the switch statement with static magic numbers
        this.weapon = "Mace";
        this.class = "Cleric";
    }

    
    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed
    
    For cleric, should obviously have some way to heal own health(in future potential healing of party health) but should also have the ability to cast damaging spells
    */
   castSpell(spell, target){
       switch(spell){
            case "Holy Fire": {
                let damage = 10 + (this.intellect * 0.2);

                console.log(`${spell} damage: ${damage}`);
                target.health -= damage;
                console.log(`${this.name} does ${damage} damage to ${target.name}`);
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
            case "Mace": {
                let wep_damage = 7 + (this.strength * 0.1);
                
                console.log(`${weapon} damage: ${wep_damage}`);
                target.health -= wep_damage;
                console.log(`${this.name} does ${wep_damage} damage to ${target.name}`);
            }
       }
   }

   //for cleric, the level up override will increase int and stam as main stats

}

module.exports = Cleric;
