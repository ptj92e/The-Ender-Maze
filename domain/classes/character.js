class Character {
    constructor(name, level){
        this.name = name;
        this.base_health = 100;
      
        this.level = level;
        this.experience = 0;
        this.hasAttacked = false;
        
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
        const exp_to_level = 1000 * this.level;
        this.experience += exp;

        if(exp_to_level <= this.experience){

            this.experience -= exp_to_level;
            this.levelUp();
        }

    }
    //base level up method, overriding in each of the subclasses that extend character to update the stats according to the subclass
    levelUp(){
        this.max_health = this.base_health + (this.stamina * 10);
        this.level += 1;
    }
} 

module.exports = Character;