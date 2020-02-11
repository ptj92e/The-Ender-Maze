const Character = require("./Character");

class Paladin extends Character {
    constructor(name){
        super(name, 8, 10, 5, 15);
        //think about adding weapon properties (damage, etc) so melee/basic attack damage can be calculated off of "weapon damage" instead of a static magic number
        this.weapon = "Zweihander";
    }

    
    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed. Pretty much same as wizard class, but obviously will be choosing from a different list of spells, that will have different effects*/

    castSpell(spell, target){
        switch(spell){
            //havent decided on spells here yet, so will come back.
            case "Judgement": {
                let damage = 10 + (this.intellect * 0.2);
                console.log(`${spell} damage: ${damage}`);
                target.health -= damage;
            }
            break;

            default: {
                return;
            }
        }
    }

    //abilities that do physical damage rather than magic damage maybe?
    meleeAttack(ability, target){
        switch(ability){
            //maybe give melee abilities here, since they will be doing physical damage and not magical damage, so separation of spell and melee abilities
            case "Heaven's Fist": {
                let damage = 12 + (this.strength * 0.2);
                console.log(`${ability} damage: ${damage}`);
                target.health -= damage;
            }
            break;

            default: {
                return;
            }
        }
    }
    
    //basic attack with melee weapon
    basicAttack(weapon, target){
        //damage calculated based on weapon of choice
        switch(weapon){
            //the console logs should be transitioned to the actual text area for the combat when the time comes, and also maybe think of leaving it and figuring out how to display a combat log like in others game
            case "Zweihander": {
                let wep_damage = 10 + (this.strength * 0.1);
                console.log(`${weapon} damage: ${wep_damage}`);
                console.log(`${this.name} does ${damage} damage with ${weapon} to ${target.name}`);
                target.health -= wep_damage;
            }
            break;

            default: {
                return;
            }
        }
    }

    //level up override, paladin should gain more stam and strength, regular agility and intellect(as spells will be calculated off intellect, maybe also strenght for a combination, depending on what spell)
    levelUp(){
        this.stamina += 2;
        this.strength += 2;
        this.intellect += 1;
        this.agility += 1;
        this.speed += 1;
        super.levelUp();
    }
}

module.exports = Paladin;