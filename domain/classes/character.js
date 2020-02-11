class Character {
    constructor(name, intellect, strength, agility, stamina){
        this.name = name;
        this.base_health = 100;
        this.intellect = parseInt(intellect);
        this.strength = parseInt(strength);
        this.agility = parseInt(agility);
        this.stamina = parseInt(stamina);
        this.level = 1;
        this.experience = 0;
        this.hasAttacked = false;
        this.speed = 10;
        this.max_health = parseInt(this.base_health) + (parseInt(this.stamina) * 10);
    }

    rest(){
        if(this.health < this.max_health){
            this.health = this.max_health;
        }
        console.log("You feel well rested.");
    }


    //method that will be called after killing enemies, gaining experience towards a threshold, then once it is passed, levelling up, and then subtracting the remaining experience gained from the exp needed to level
    gainExperience(exp){
        //threshold for levelling
        const exp_to_level = 1000 * parseInt(this.level);
        this.experience += exp;

        if(exp_to_level <= this.experience){

            this.experience -= exp_to_level;
            this.levelUp();
        }

    }
    //base level up method, overriding in each of the subclasses that extend character to update the stats according to the subclass
    levelUp(){
        this.max_health = parseInt(this.base_health) + parseInt((this.stamina * 10));
        this.level += 1;
    }
} 

module.exports = Character;