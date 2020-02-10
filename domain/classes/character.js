class Character {
    constructor(name, intellect, strength, agility, stamina){
        this.name = name;
        this.max_health = parseInt(this.health) + parseInt((this.stamina * 10));      
        this.health = 100;
        this.intellect = intellect;
        this.strength = strength;
        this.agility = agility;
        this.stamina = stamina;
        this.level = 1;
        this.experience = 0;
        this.hasAttacked = false;
    }

    rest(){
        if(this.health < this.max_health){
            this.health = this.max_health;
        }
        console.log("You feel well rested.");
    }
} 

module.exports = Character;