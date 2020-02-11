const Character = require("./Character");

class Rogue extends Character {
    constructor(){
        super(name, 8, 10, 15, 12);
    }

    
    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed
    
    For the rogue, not sure what to do in terms of spells, so maybe won't have any at the start. But once I can figure out how to apply DoTs and have them tick, could have poisonWeapon() or something? just templating this out so I can come back when I have more to work with.
    */
   castSpell(spell){
       switch(spell){

       }
   }

   //melee moves here, calculate damage based on agility, (maybe some small percentage of strength eventually, but for now just agility)
   meleeAttack(attack){
       switch(attack){

       }
   }

   //basic weapon attack
   basicAttack(weapon){
       switch(weapon){

       }
   }
}