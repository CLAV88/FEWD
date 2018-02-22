"use strict";
let n = 3
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    let trafficlanes = [225, 140, 60];
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = trafficlanes[Math.floor(Math.random() * trafficlanes)];
    this.row = Math.floor(this.x/83)+1;
    this.col = Math.floor(this.y/101)+1;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt,s) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 500) {
        let trafficlanes = [225, 140, 60];
        this.x = 0;
        this.y = trafficlanes[Math.floor((Math.random() * trafficlanes.length))];
    }
    this.x += dt * Math.floor((Math.random() * s) + 1);
    this.col = Math.floor(this.x/101)+1;
    this.row = Math.floor(this.y/83)+2;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.row = 6;
    this.col = 3;
    this.y = (((this.row - 1) * 83) -10);
    this.x = (this.col - 1) * 101;
};

Player.prototype.update = function () {
    this.y =(((this.row - 1) * 83) -10);
    this.x =(this.col -1) * 101;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyCode) {
    switch(keyCode){
        case 'left':
            if (this.col > 1 && this.col < 6){
                this.col -= 1;
            }
            break;
        case 'up':
            if (this.row > 1 && this.row < 7){
                this.row -= 1;
            }
            break;
        case 'right':
            if (this.col > 0 && this.col < 5){
                this.col += 1;
            }
            break;
        case 'down':
            if (this.row > 0 && this.row < 6){
                this.row += 1;
            }
            break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let player = new Player();

let levelEnemies = function (n) {
    for (n; n > 0; n--){
        let enemy = new Enemy();
        enemy.en_index = n;
        allEnemies.push(enemy);
    }
    return allEnemies;
};


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
