//Adding click listeners to create buttons
$("#paladin").on("click", function () {
    let paladinName = {
        name: $("#paladinName").val().trim()
    };
    $.ajax("/api/paladin" , {
        type: "POST",
        data: paladinName
    }).then(function() {
        console.log("Paladin created: " + paladinName);
    });   
});

$("#cleric").on("click", function () {
    let clericName = {
        name: $("#clericName").val().trim()
    };
    $.ajax("/api/cleric" , {
        type: "POST",
        data: clericName
    }).then(function() {
        console.log("Cleric created: " + clericName);
    }); 
});

$("#rogue").on("click", function () {
    let rogueName = {
        name: $("#rogueName").val().trim()
    };
    $.ajax("/api/rogue" , {
        type: "POST",
        data: rogueName
    }).then(function() {
        console.log("Rogue created: " + rogueName);
    }); 
});

$("#wizard").on("click", function () {
    let wizardName = {
        name: $("#wizardName").val().trim()
    };
    $.ajax("/api/wizard" , {
        type: "POST",
        data: wizardName
    }).then(function() {
        console.log("Wizard created: " + wizardName);
    });     
});