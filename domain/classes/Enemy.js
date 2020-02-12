/**
 * Will come back to this, just scaffolding out some stuff. Need to create an enemy class, that takes in an enemy name as a parameter(like goblin, dragon, etc) then also take in the user's level on the current character as a parameter, then perform a switch statement to see the level range the user is in, and based on user level, randomly generate the enemies stats
 */

 class Enemy {
     constructor(name, character_level){
         this.name = name;

         /**
          * Figure out a way to use the constant of character_level to decide the random stat generations. maybe something like randomNum = Math.floor(Math.random * (character_level * 0.2));
          */

     }
 }