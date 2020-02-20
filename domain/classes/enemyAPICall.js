const axios = require("axios");

//set global empty array, so I can perform axios call, retrieve all the names from the list, and pipe them into this array for export

module.exports = {
    random_enemy_array: async function(){
        
       return axios.get("http://dnd5eapi.co/api/monsters").then(data => {
            
            const name_data = data.data.results;
            // for(let i=0;i<data.data.results.length; i++){
        
            //     enemy_names.push(data.data.results[i].name);
            // }
            let enemy_array = name_data.map(names => {
                return names.name;
            });
            
            
            return enemy_array;
        });
    }
}


