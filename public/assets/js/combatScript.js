$(".melee").click( () => {
    let enemy_health = parseInt($(".enemy-health").text());
    let player_health = parseInt($(".player-health").text());
    let player_damage = 10;
    let enemy_damage = 5;
    let player_attacked = true;
    let enemy_name = $(".enemy-name").text();
    
    
    

    if(player_damage >= enemy_health){
        enemy_health = 0;
        $(".enemy-health").text(enemy_health);
    }
     else if(player_attacked){
    
            enemy_health -= player_damage;
        
            $(".enemy-health").text(enemy_health);
        
            $(".combatText").prepend(`<p class="myAttack">You do ${player_damage} damage to ${enemy_name}</p>`);
            
            player_attacked = false;
            
        }
        
            
        
        if(!player_attacked){
            player_health -= enemy_damage;
    
            $(".player-health").text(player_health);
            
            $(".combatText").prepend(`"\n"<p class="theirAttack">${enemy_name} does ${enemy_damage} damage to you.</p>`);
            player_attacked = false;
        }

        if(enemy_health <= 0){
            $("#combat-continue").removeAttr("hidden");
        }
    
});

$(".spell").click( () => {
    let player_damage = 15;
    let enemy_damage = 10;
    let player_attacked = true;
    let enemy_health = parseInt($(".enemy-health").text());
    let enemy_name = $(".enemy-name").text();
    let player_health = parseInt($(".player-health").text());
    
    
    

    if(player_damage >= enemy_health){
        enemy_health = 0;
        $(".enemy-health").text(enemy_health);
    }
    else if(player_attacked){
            enemy_health -= player_damage;
        
            $(".enemy-health").text(enemy_health);
        
            $(".combatText").prepend(`<p class="myAttack">You do ${player_damage} damage to ${enemy_name}</p>`);
            
            player_attacked = false;
    
        }
        
            
        
        if(!player_attacked){
            player_health -= enemy_damage;
    
            $(".player-health").text(player_health);
            
            $(".combatText").prepend(`"\n"<p class="theirAttack">${enemy_name} does ${enemy_damage} damage to you.</p>`);
            player_attacked = false;
        }
        if(enemy_health <= 0){
            $("#combat-continue").removeAttr("hidden");
        }
    
});

$("#combat-continue").click((event) => {
    let id = $(event.target).data("id");
    changeCompleted(id);
})

function changeCompleted(id) {
    $.ajax("/api/completed/" + id, {
        type: "GET"
    }).then(function() {
        
    });
};

