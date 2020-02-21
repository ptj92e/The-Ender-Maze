$(".melee").click( () => {
    let player_damage = 10;
    let enemy_damage = 10;
    let player_attacked = false;
    let enemy_health = parseInt($(".enemy-health").text());
    let enemy_name = $(".enemy-name").text();
    let player_health = parseInt($(".player-health").text());
    
    
    if(!player_attacked){
        let player_attack_count = null;

        enemy_health -= player_damage;
    
        $(".enemy-health").text(enemy_health);
    
        $(".combatText").prepend(`<p>You do ${player_damage} damage to ${enemy_name}</p>`);
        player_attack_count += 1;
        player_attacked = true;

    }
    console.log(player_attack_count);
        
    
    if(((player_attack_count % 2) == 0) && player_attacked){
        player_health -= enemy_damage;

        $(".player-health").text(player_health);
        
        $(".combatText").prepend(`"\n"<p>${enemy_name} does ${enemy_damage} damage to you.</p>`);
        player_attacked = false;
    }
});