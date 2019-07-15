// Base class for anything that moves.
// Most important methods are MovingObject.prototype.move, 
// MovingObject.prototype.draw(ctx), MovingObject.prototype.isCollidedWith(otherMovingObject).

function MovingObject (options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
  this.game = options["game"];

}

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos[0] = parseInt(this.pos[0]) + parseInt(this.vel[0]);
  this.pos[1] = parseInt(this.pos[1]) + parseInt(this.vel[1]);

  this.pos = this.game.wrap(this.pos)
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  const r1 = this.radius;
  const r2 = otherObject.radius;
  const d = Util.distance(this.pos, otherObject.pos)
  
  if (r1 + r2 > d) {
    return true;
  } else {
    return false;
  }
}

const Util = require("./utils.js")
module.exports = MovingObject