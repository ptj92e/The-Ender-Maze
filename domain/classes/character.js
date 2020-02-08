class Character {
    constructor(name, intellect, strength, agility, stamina){
        this.name = name;
        this.max_health = this.health + (this.stamina * 10);      
        this.health = 100;
        this.intellect = intellect;
        this.strength = strength;
        this.agility = agility;
        this.stamina = stamina;
    }

    rest(){
        if(this.health < this.max_health){
            this.health = this.max_health;
        }
        console.log("You feel well rested.");
    }
} 