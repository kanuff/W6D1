// Holds collections of the asteroids, bullets, and your ship.
//   Game.prototype.step method calls Game.prototype.move on all the objects, and
//    Game.prototype.checkCollisions checks for colliding objects.
//     Game.prototype.draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.

function Game (){
  this.DIM_X = 500;
  this.DIM_Y = 500;
  this.NUM_ASTEROIDS = 40;
  this.asteroids = [];
  this.addAsteroids(this.NUM_ASTEROIDS);
}

Game.prototype.randomPosition = function() {
  const x = Math.floor(Math.random()*this.DIM_X);
  const y = Math.floor(Math.random()*this.DIM_Y);
  return [x, y];

}

Game.prototype.addAsteroids = function(numAsteroids){
  let i = 0;
  while (i < numAsteroids){
    const new_asteroid = new Asteroid({pos: this.randomPosition(), game: this});
    this.asteroids.push(new_asteroid);
    i++;
  }
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
}

Game.prototype.wrap = function(pos){
  // if pos > 500
  // then return pos % 500
  let new_pos = [];

  new_pos[0] = pos[0] % this.DIM_X;
  new_pos[1] = pos[1] % this.DIM_Y;

  return new_pos;
}

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    const a1 = this.asteroids[i];
    for (let j = 0; j < this.asteroids.length; j++) {
      const a2 = this.asteroids[j];
      if (i !== j && a1.isCollidedWith(a2)) {
        console.log("COLLISION");
      }
    }
  }
}

// Game.prototype.step = function() {
//   this.moveObjects();
//   this.checkCollisions();
// }

const Asteroid = require("./asteroid.js")

module.exports = Game;