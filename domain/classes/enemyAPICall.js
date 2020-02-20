const axios = require("axios");

//set global empty array, so I can perform axios call, retrieve all the names from the list, and pipe them into this array for export
const enemy_names = [];


axios.get("http://dnd5eapi.co/api/monsters").then(data => {
    
    for(let i=0;i<data.data.results.length; i++){

        enemy_names.push(data.data.results[i].name);
    }
    
    module.exports = enemy_names;
});


