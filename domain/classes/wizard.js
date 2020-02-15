const Character = require("./Character");

class Wizard extends Character {

    constructor(name, level) {
        super(name, level);
        this.intellect = 15 + (level * 2);
        this.strength = 8 + level;
        this.agility = 8 + level;
        this.stamina = 9 + level;
        this.speed = 10 + (level * 2);
        this.max_health = this.base_health + (this.stamina * 10);
        this.weapon = "Wizard Staff";
        this.class = "Wizard";
    }

    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed*/
    castSpell(spell, target) {
        switch (spell) {
            case "Fireball": {
                //this spell should do 10 + (this.int * 0.2) damage to the target
                //maybe also think of leaving a DoT on the target that ticks for a couple of damage for a number of turns
                let damage = 10 + (this.intellect * 0.2);
                console.log(`Fireball damage: ${damage}`);
                console.log(`${spell} does ${damage} damage to ${target.name}`);
                target.health -= damage;
            }
                break;
            case "Frostbolt": {
                /*Will come back to finish the spell list later, but idea for frostbolt is damage, but also reducing the speed of the opponent either for the duration of combat or maybe a couple of turns, just some ideas */

                //does less damage than fireball, but will reduce targets speed
                let damage = 8 + (this.intellect * 0.2);
                target.health -= damage;
                //giving static number for now, may try to calculate this off intellect/other criteria at a later point
                console.log(`${spell} does ${damage} damage to ${target.name} and lowers ${target.name}'s speed`);
                //slowing speed here, in combat we need to compare speeds of the user's character and the enemy to decide who goes first
                target.speed -= 2;

            }
        }
    }

    /*Similar to above, this attack method will take in whatever weapon is being used, and calculate the damage based on the weapon being taken in
    
    unsure of how to currently implement actually "holding" a weapon. will look into this when i get a chance
    */
    basicAttack(weapon, target) {
        switch (weapon) {
            case "Wizard Staff": {
                let wep_damage = 5 + (this.strength * 0.1);
                console.log(`${this.weapon} deals ${wep_damage} to ${target.name}`);
                target.health -= wep_damage;
            }
        }
    }

    //level up method to increase level by 1, still not sure how to track experience, but working on it and will just call this function after a battle if this.experience goes over the level threshold
 

}
module.exports = Wizard;