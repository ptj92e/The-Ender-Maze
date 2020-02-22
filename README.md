# The-Ender-Maze

The Ender Maze is an HTML5 browser game that is inspired by Dungeons and Dragons. In this game, you can create your own Paladin, Wizard, Cleric or Rogue and go through a maze solving puzzles and battling enemies to reach the goal. 

If you would like to play the app, here is a link to the deployed version: https://arcane-plains-16309.herokuapp.com/

## Technologies Used
### Front End
- CSS
- JavaScript
- JQuery
- Bootstrap
- Animate.CSS
- Handlebars.JS

### Back End
- Express
- mySQL
- Sequelize
- Handlebars Helpers
- Axios

## Game-Play
On the front end of the app, we are using Handlebars to render views for the user to interact with. It is styled with CSS, Bootstrap, and Animate.CSS to give it the retro 8-Bit look. We also took advantage of a Google Font to add to the aesthetic. 

* On the home page, there are two buttons that prompt the user to either create a character or to continue with a previously used character. 

* If the user decides to make a new character, the app renders a page that displays the classes to choose from. If the user wants to check out a class, they can click on the name of the class and they are then guided to a different handlebar. 

* Once a class has been chosen, the page populates with information about that class and a form that the user can put in a name for their character. We then use jQuery to retrieve the name and the character is then created in the database. Once the character is created, the user is routed to the character selection page. 

* The character selection page is full of every character that has been created on the database so far. If you want to play the game, you can click the name of the character. If you want to delete the character, you can click the delete button on the character you want to delete. 

* Once the user begins the game, they are sent to a page with a grey box and the character's information on the screen. We use a series of key up listeners that call a function to move the character around on the maze. If the character hits a spot on the maze, the app makes an ajax call that checks the id of the maze to the id of an encounter in a json file. The user is then presented with either a puzzle, or a combat situation. 

* If the player enters a puzzle, they are given a scenario and a list of answer choices. If the correct answer is selected, the player is congratulated and a continue button appears on the screen. If the incorrect answer is selected, the player is presented with a consequence and the continue button appears on the screen. Once the continue button is clicked, an ajax call is made to set the "isCompleted" value of the json file to "true" so the user can pass over that obstacle. 

* If the player enter a combat scenario, the app makes an axios call to a DND api that retrieves a list of monster names. From there, a monster name is randomly selected and populated on the screen along with a generic sprite and enemy health. The player's information is populated on the left side of the screen. There is a list of attacks that populates that, when clicked attacks the enemy. Once the enemy is attacked, the enemy attacks the player and a text description of the events populates to the bottom of the screen. Once the enemy is defeated, a continue button populates that functions the same way as it does on the puzzle page. 

* Once the player reaches the end of the maze, they are congratulated for their job well done and they can either continue on or exit out of the game. Right now, there is only one level to the game so there is no way to continue on through the rest of the game. 

On the back end of the app, we are using an Express.js server to handle all of the routes being handles with the event listeners and ajax calls from the front end. These routes create, read, update, and delete information from the mySQL database. We are using the Sequelize ORM to manage the query connections to the database to manage the information. 