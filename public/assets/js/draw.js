//setting the canvas as a variable
let canvas = $("#enderMaze");
let fog = $("#mazeFog");
//creating the game board
let board = [
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 1, -1]
];
//Creating the fog for the maze
let mazeFog = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
//creating the characer's starting position
let player = {
    x: 0,
    y: 0
};
//This draws the maze to the html
function draw() {
    var width = canvas.width();
    var blockSize = width / board.length;
    var ctx = canvas[0].getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, width);
    ctx.fillStyle = "grey";
    //Loop through the board array drawing the walls and the goal
    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board[y].length; x++) {
            //Draw a wall
            if (board[y][x] === 1) {
                ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
            }
            //Draw the goal
            else if (board[y][x] === -1) {
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = "gold";
                ctx.moveTo(x * blockSize, y * blockSize);
                ctx.lineTo((x + 1) * blockSize, (y + 1) * blockSize);
                ctx.moveTo(x * blockSize, (y + 1) * blockSize);
                ctx.lineTo((x + 1) * blockSize, y * blockSize);
                ctx.stroke();
            }
        }
    }
    //Draw the player
    ctx.beginPath();
    var half = blockSize / 2;
    ctx.fillStyle = "blue";
    ctx.arc(player.x * blockSize + half, player.y * blockSize + half, half, 0, 2 * Math.PI);
    ctx.fill();
    createFog();
};

function createFog() {
    var width = fog.width();
    var blockSize = width / mazeFog.length;
    var ctx = fog[0].getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, width);
    ctx.fillStyle = "grey";
    //Loop through the board array drawing the walls and the goal
    for (var y = 0; y < mazeFog.length; y++) {
        for (var x = 0; x < mazeFog[y].length; x++) {
            //Draw a wall
            if (mazeFog[y][x] === 1) {
                ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
            }
        }
    }
};
//Check to see if the new space is inside the board and not a wall
function canMove(x, y) {
    return (y >= 0) && (y < board.length) && (x >= 0) && (x < board[y].length) && (board[y][x] != 1);
};
//Key up events to change the position of the character. 
$(document).keyup(function (e) {
    if ((e.which == 38) && canMove(player.x, player.y - 1))//Up arrow
        player.y--;
    else if ((e.which == 40) && canMove(player.x, player.y + 1)) // down arrow
        player.y++;
    else if ((e.which == 37) && canMove(player.x - 1, player.y))
        player.x--;
    else if ((e.which == 39) && canMove(player.x + 1, player.y))
        player.x++;
    //Runs the game function to render different encounters
    
    game();
    //Sets the coordinate the player is on to 0
    mazeFog[player.y][player.x] = 0;
    //Redraws the fog to show the path the player has been on
    createFog();
    //Redraws the maze to move the character
    draw();
    e.preventDefault();
});

draw();