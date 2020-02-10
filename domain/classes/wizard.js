const Character = require("./character");

class Wizard extends Character{

    constructor(name) {
        super(name, 10, 8, 8, 9);
        this.name = name;
        this.max_health = parseInt(this.health) + parseInt((this.stamina * 10));
    }

    /*This cast spell method will take in a spell(provided either by the default starting spells or the pulled table of spells that I will create later), and perform a switch statement to determine which spell has been taken in, and calculate the damage based on the spell parameter that is passed*/
    castSpell(spell){
        switch(spell){

        }
    }

    /*Similar to above, this attack method will take in whatever weapon is being used, and calculate the damage based on the weapon being taken in */
    basicAttack(weapon){
        switch(weapon){

        }
    }

}
module.exports = Wizard;