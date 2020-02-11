const Character = require("./Character");

class Paladin extends Character {
    constructor(name){
        super(name, 5, 10, 5, 15);
    }

    
    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed. Pretty much same as wizard class, but obviously will be choosing from a different list of spells, that will have different effects*/

    castSpell(spell){
        switch(spell){
            //havent decided on spells here yet, so will come back.
        }
    }

    //abilities that do physical damage rather than magic damage maybe?
    meleeAttack(attack){
        switch(attack){
            //maybe give melee abilities here, since they will be doing physical damage and not magical damage, so separation of spell and melee abilities
        }
    }
    
    //basic attack with melee weapon
    basicAttack(weapon){
        //damage calculated based on weapon of choice
        switch(weapon){

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