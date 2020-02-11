const Character = require("./Character");

class Cleric extends Character {
    constructor(){
        super(name, 12, 8, 8, 12);
    }

    
    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed
    
    For cleric, should obviously have some way to heal own health(in future potential healing of party health) but should also have the ability to cast damaging spells
    */
   castSpell(spell){
       switch(spell){

       }
   }

  

   //basic weapon attack
   basicAttack(weapon){
       switch(weapon){

       }
   }

   //for cleric, the level up override will increase int and stam as main stats
   levelUp(){
    this.stamina += 2;
    this.strength += 1;
    this.intellect += 2;
    this.agility += 1;
    this.speed += 1;
    super.levelUp();
}
}

module.exports = Cleric;
