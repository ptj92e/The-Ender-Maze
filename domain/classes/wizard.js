const Character = require("./Character");

class Wizard extends Character {

    constructor(name) {
        super(name, 10, 8, 8, 9);
    }

    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed*/
    castSpell(spell, target) {
        switch (spell) {
            case "Fireball": {
                //this spell should do 10 + (this.int * 0.2) damage to the target
                //maybe also think of leaving a DoT on the target that ticks for a couple of damage for a number of turns
                let damage = (10 + parseInt(this.intellect) * 0.2);
                console.log(`Fireball damage: ${damage}`);
                console.log(`${spell} does ${damage} damage to ${target.name}`);
                target.health -= damage;
            }
                break;
            case "Frostbolt": {
                /*Will come back to finish the spell list later, but idea for frostbolt is damage, but also reducing the speed of the opponent either for the duration of combat or maybe a couple of turns, just some ideas */
            }
        }
    }

    /*Similar to above, this attack method will take in whatever weapon is being used, and calculate the damage based on the weapon being taken in */
    basicAttack(weapon) {
        switch (weapon) {

        }
    }

    //level up method to increase level by 1, still not sure how to track experience, but working on it and will just call this function after a battle if this.experience goes over the level threshold
    levelUp() {
        this.intellect += 2;
        this.agility += 1;
        this.strength += 0;
        this.stamina += 1;
        this.speed += 1;
        super.levelUp();
    }

}
module.exports = Wizard;