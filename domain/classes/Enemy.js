/**
 * Will come back to this, just scaffolding out some stuff. Need to create an enemy class, that takes in an enemy name as a parameter(like goblin, dragon, etc) then also take in the user's level on the current character as a parameter, then perform a switch statement to see the level range the user is in, and based on user level, randomly generate the enemies stats
 */

class Enemy {
    constructor(name, character) {
        this.name = name;

        /**
         * decided to just pass the entire character object into the enemy constructor, that way I can use whichever properties I need to generate health, speed, experience, and damage with attacks, I don't see any reason to have stam, agi, int, or str for the enemy, at least for right now
         */

        this.health = 100 + (character.max_health * 0.5);
        this.experience = 100 * character.level;
    }
}