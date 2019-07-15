// Spacerock.It inherits from MovingObject.

function Asteroid (options) {
  this.COLOR = "orange";
  this.RADIUS = 20;
  this.vel = Util.randomVec(10);
  let options2 = {
    color: this.COLOR,
    radius: this.RADIUS,
    vel: this.vel,
    pos: options["pos"],
    game: options["game"]
  }
  MovingObject.call(this, options2);

}

const Util = require("./utils.js")
Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;