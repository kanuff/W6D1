// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game.prototype.step.

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(() => {
    this.game.draw(this.ctx);
    // this.game.step();
    this.game.moveObjects();
    // this.game.checkCollisions();
  }, 20)
  // setInterval(this.game.draw(this.ctx), 20)
}

const Game = require("./game.js")
module.exports = GameView;