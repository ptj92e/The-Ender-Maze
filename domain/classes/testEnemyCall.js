const enemy_array = require("./enemyAPICall");

let enemy_name = null;

const getRandomEnemy = async() => {

    return enemy_array.random_enemy_array();
    
}

let rand_enemy = getRandomEnemy();
rand_enemy.then(result => {
    
    enemy_name = result[Math.floor(Math.random() * result.length)];
    console.log(enemy_name);
});
