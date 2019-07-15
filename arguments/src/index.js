const docReady = document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("canvas");
  window.canvasEl = canvasEl;

  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  window.ctx = ctx;

  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, 500, 500);

  // ctx.beginPath();
  // ctx.arc(250, 250, 80, 0, 2 * Math.PI, true);
  // ctx.strokeStyle = "white";
  // ctx.lineWidth = 30;
  // ctx.stroke();
  // ctx.fillStyle = "yellow";
  // ctx.fill();
});

// console.log("Good")

const MovingObject = require("./moving_object.js")
window.MovingObject = MovingObject;

const Asteroid = require("./asteroid.js")
window.Asteroid = Asteroid;

const Util = require("./utils.js")
window.Util = Util;

const Game = require("./game.js")
window.Game = Game;

const GameView = require("./game_view.js")
window.GameView = GameView;

module.exports = {
  docReady,
};
