// Define the size of image and scores
var cell_width = 101,
    cell_height = 83,
    floatingScore = {
    water: +100,
    enemy: -200
};

// Set the default character 
var char = 'char-boy';

// Enemies our player must avoid 
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed || Math.random() * 100 +100;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt, x) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt * this.speed
    // Enemis appear from left of screen
    if (this.x >= 5 * cell_width) {
        this.x = -1 * cell_width;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/' + char + '.png';
    this.score = 0;
};

Player.prototype.change = function(char) {
    this.sprite = 'images/' + char + '.png';
}

// Give user a delay time to realize their control has been done
var count = 0
Player.prototype.update = function(dt) {
    if (this.y === -11) {
        count ++;
        if (count % 5 === 2) {
            // alert("You Win!!");
            this.reset();
            this.score += Math.abs(floatingScore.water);
        }
    } 
};

Player.prototype.reset = function(){
    this.x = 2 * cell_width;
    this.y = 4 * cell_width;
}
// Collision detection
Player.prototype.checkCollisions = function () {
    for(var i=0;i<allEnemies.length;i++){
        //First check player and enemies' x coordinates（
        if(this.y === allEnemies[i].y){
            //then check the distance between player and enemies
            if((Math.abs(this.x - allEnemies[i].x))<70){
                count ++;
                if (count % 5 === 2) {
                    // alert("Oops, you got caught!");
                    if (this.score >= Math.abs(floatingScore.enemy)) {
                        this.score -= Math.abs(floatingScore.enemy);
                    } else {
                        this.score = 0;
                    }
                    this.reset();
                }
    // console.log(`checkCollisions() is working: player: ${this.x}, ${this.y}; enemy: ${allEnemies[i].x}, ${allEnemies[i].y}`)
            }
        }
    }
}

Player.prototype.handleInput = function(movement) {
    switch(movement) {
        case 'left':  
        if (this.x > 0) {
            this.x -= cell_width;}
        break;
        case 'right': 
        if (this.x < 4 * cell_width) {
            this.x += cell_width;}
        break;
        case 'up': 
        if (this.y > 0) {
            this.y -= cell_height;}
        break;
        case 'down': 
        if (this.y < 4 * cell_height) {
            this.y += cell_height;}
        break;
    }
};

//This function is used to render player

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
// Put in bugs
for (var i=0; i<6; i++){
    var bugs = new Enemy(-1 * cell_width, cell_height*(i%4)+72);
    allEnemies.push(bugs);
}
var player = new Player(2 * cell_width, 4 * cell_width)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Initialize the character to the player's choosen, if clicked */
document.getElementById('boy').addEventListener('click', function(){
    char = 'char-boy';
    document.getElementById('boy').src ='images/char-boy.png';
    document.getElementById('cat-girl').src ='images/char-cat-girl-off.png';
    document.getElementById('horn-girl').src ='images/char-horn-girl-off.png';
    document.getElementById('princess-girl').src ='images/char-princess-girl-off.png';
    player.change(char);
}, false);

document.getElementById('cat-girl').addEventListener('click', function(){
    char = 'char-cat-girl';
    document.getElementById('boy').src ='images/char-boy-off.png';
    document.getElementById('cat-girl').src ='images/char-cat-girl.png';
    document.getElementById('horn-girl').src ='images/char-horn-girl-off.png';
    document.getElementById('princess-girl').src ='images/char-princess-girl-off.png';
    player.change(char);
}, false);

document.getElementById('horn-girl').addEventListener('click', function(){
    char = 'char-horn-girl';
    document.getElementById('boy').src ='images/char-boy-off.png';
    document.getElementById('cat-girl').src ='images/char-cat-girl-off.png';
    document.getElementById('horn-girl').src ='images/char-horn-girl.png';
    document.getElementById('princess-girl').src ='images/char-princess-girl-off.png';
    player.change(char);
}, false);

document.getElementById('princess-girl').addEventListener('click', function(){
    char = 'char-princess-girl';
    document.getElementById('boy').src ='images/char-boy-off.png';
    document.getElementById('cat-girl').src ='images/char-cat-girl-off.png';
    document.getElementById('horn-girl').src ='images/char-horn-girl-off.png';
    document.getElementById('princess-girl').src ='images/char-princess-girl.png';
    player.change(char);
}, false);
