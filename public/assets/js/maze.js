//Adding click listeners to create buttons
$("#paladin").on("click", function () {
    let paladinName = {
        name: $("#paladinName").val().trim()
    };
    $.ajax("/api/paladin", {
        type: "POST",
        data: paladinName
    }).then(function () {
        console.log("Paladin created: " + paladinName);
        window.location.href = "/characters";
        
    });
});

$("#cleric").on("click", function () {
    let clericName = {
        name: $("#clericName").val().trim()
    };
    $.ajax("/api/cleric", {
        type: "POST",
        data: clericName
    }).then(function () {
        console.log("Cleric created: " + clericName);
        window.location.href = "/characters";
       
    });
});

$("#rogue").on("click", function () {
    let rogueName = {
        name: $("#rogueName").val().trim()
    };
    $.ajax("/api/rogue", {
        type: "POST",
        data: rogueName
    }).then(function () {
        console.log("Rogue created: " + rogueName);
        window.location.href = "/characters";
       
    });
});

$("#wizard").on("click", function () {
    let wizardName = {
        name: $("#wizardName").val().trim()
    };
    $.ajax("/api/wizard", {
        type: "POST",
        data: wizardName
    }).then(function () {
        console.log("Wizard created: " + wizardName);
        window.location.href = "/characters";
        
    });
});
//This gets the encounter information from the JSON file
function getEncounter(id) {
    //get id for character
    let character_id = $(".mazeChar").data("id");
    console.log("This is from getEncounter " + character_id);
    //Ajax call to retrieve information from the json object
    $.ajax("/api/encounter/" + id, {
        type: "GET"
    }).then(function (data) {
        if (data.type === "Puzzle") {
            window.location.href = "/puzzle/" + id + "&" + character_id;
        } else if (data.type === "Combat") {
            window.location.href = "/combat/" + character_id + "&" + id;
        } else if (data.type === "Level Complete") {
            window.location.href = "/newlevel/" + id;
        }
    });
};
//This function checks the players coordinates and if they match the given parameters, the getEncounter function is called and returns information from the json object to render the encounters
function game() {
    if ((player.y === 2) && (player.x === 0)) {
        let id = 1;
        getEncounter(id);
    } else if ((player.y === 8) && (player.x === 3)) {
        let id = 2;
        getEncounter(id);
    } else if ((player.y === 7) && (player.x === 5)) {
        let id = 3;
        getEncounter(id);
    } else if ((player.y === 3) && (player.x === 4)) {
        let id = 4;
        getEncounter(id);
    } else if ((player.y === 1) && (player.x === 6)) {
        let id = 5;
        getEncounter(id);
    } else if ((player.y === 5) && (player.x === 7)) {
        let id = 6;
        getEncounter(id);
    } else if ((player.y === 5) && (player.x === 9)) {
        let id = 7;
        getEncounter(id);
    } else if ((player.y === 9) && (player.x === 9)) {
        let id = 8;
        getEncounter(id);
    }
};

$("#answerChoices").on("click", function (event) {
    event.stopPropagation();
    $.ajax("/api/encounter/" +$("#answerChoices").data("id"), {
        type: "GET"
    }).then(function(data) {
        if ($(event.target).data("id") === data.correctID) {
            $("#puzzleText").text(data.completed);
            newButtons();
            changeCompleted(data.id);
        } else {
            $("#puzzleText").text(data.failed);
            newButtons();
            changeCompleted(data.id);
        }
    });
});

function newButtons() {
    $("#answerChoices").hide();
    $("#continueGame").removeAttr("hidden");
}

function changeCompleted(id) {
    $.ajax("/api/completed/" + id, {
        type: "GET"
    }).then(function() {
        console.log("You completed this task.");
    });
};

$("#startMaze").click((event) => {
    let isCompleted = false;
    $.ajax("/api/resetMaze", {
        type: "PUT",
        data: isCompleted
    }).then(() => {
    
    });

});

