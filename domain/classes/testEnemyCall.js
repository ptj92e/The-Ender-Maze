const enemy_array = require("./enemyAPICall");

const getRandomEnemy = async() => {

    return enemy_array.random_enemy_array();
    
}

let rand_enemy = getRandomEnemy();
rand_enemy.then(result => {
    console.log(result);
});