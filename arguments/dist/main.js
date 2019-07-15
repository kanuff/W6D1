/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Spacerock.It inherits from MovingObject.\n\nfunction Asteroid (options) {\n  this.COLOR = \"orange\";\n  this.RADIUS = 20;\n  this.vel = Util.randomVec(10);\n  let options2 = {\n    color: this.COLOR,\n    radius: this.RADIUS,\n    vel: this.vel,\n    pos: options[\"pos\"],\n    game: options[\"game\"]\n  }\n  MovingObject.call(this, options2);\n\n}\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nUtil.inherits(Asteroid, MovingObject)\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Holds collections of the asteroids, bullets, and your ship.\n//   Game.prototype.step method calls Game.prototype.move on all the objects, and\n//    Game.prototype.checkCollisions checks for colliding objects.\n//     Game.prototype.draw(ctx) draws the game.\n// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.\n\nfunction Game (){\n  this.DIM_X = 500;\n  this.DIM_Y = 500;\n  this.NUM_ASTEROIDS = 40;\n  this.asteroids = [];\n  this.addAsteroids(this.NUM_ASTEROIDS);\n}\n\nGame.prototype.randomPosition = function() {\n  const x = Math.floor(Math.random()*this.DIM_X);\n  const y = Math.floor(Math.random()*this.DIM_Y);\n  return [x, y];\n\n}\n\nGame.prototype.addAsteroids = function(numAsteroids){\n  let i = 0;\n  while (i < numAsteroids){\n    const new_asteroid = new Asteroid({pos: this.randomPosition(), game: this});\n    this.asteroids.push(new_asteroid);\n    i++;\n  }\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n}\n\nGame.prototype.wrap = function(pos){\n  // if pos > 500\n  // then return pos % 500\n  let new_pos = [];\n\n  new_pos[0] = pos[0] % this.DIM_X;\n  new_pos[1] = pos[1] % this.DIM_Y;\n\n  return new_pos;\n}\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    const a1 = this.asteroids[i];\n    for (let j = 0; j < this.asteroids.length; j++) {\n      const a2 = this.asteroids[j];\n      if (i !== j && a1.isCollidedWith(a2)) {\n        console.log(\"COLLISION\");\n      }\n    }\n  }\n}\n\n// Game.prototype.step = function() {\n//   this.moveObjects();\n//   this.checkCollisions();\n// }\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Stores a Game instance.\n// Stores a canvas context to draw the game into.\n// Installs key listeners to move the ship and fire bullets.\n// Installs a timer to call Game.prototype.step.\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  setInterval(() => {\n    this.game.draw(this.ctx);\n    // this.game.step();\n    this.game.moveObjects();\n    // this.game.checkCollisions();\n  }, 20)\n  // setInterval(this.game.draw(this.ctx), 20)\n}\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const docReady = document.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"canvas\");\n  window.canvasEl = canvasEl;\n\n  canvasEl.width = 500;\n  canvasEl.height = 500;\n\n  const ctx = canvasEl.getContext(\"2d\");\n  window.ctx = ctx;\n\n  // ctx.fillStyle = \"black\";\n  // ctx.fillRect(0, 0, 500, 500);\n\n  // ctx.beginPath();\n  // ctx.arc(250, 250, 80, 0, 2 * Math.PI, true);\n  // ctx.strokeStyle = \"white\";\n  // ctx.lineWidth = 30;\n  // ctx.stroke();\n  // ctx.fillStyle = \"yellow\";\n  // ctx.fill();\n});\n\n// console.log(\"Good\")\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nwindow.MovingObject = MovingObject;\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nwindow.Asteroid = Asteroid;\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nwindow.Util = Util;\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nwindow.Game = Game;\n\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\nwindow.GameView = GameView;\n\nmodule.exports = {\n  docReady,\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Base class for anything that moves.\n// Most important methods are MovingObject.prototype.move, \n// MovingObject.prototype.draw(ctx), MovingObject.prototype.isCollidedWith(otherMovingObject).\n\nfunction MovingObject (options) {\n  this.pos = options[\"pos\"];\n  this.vel = options[\"vel\"];\n  this.radius = options[\"radius\"];\n  this.color = options[\"color\"];\n  this.game = options[\"game\"];\n\n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n  ctx.strokeStyle = this.color;\n  ctx.lineWidth = 10;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  this.pos[0] = parseInt(this.pos[0]) + parseInt(this.vel[0]);\n  this.pos[1] = parseInt(this.pos[1]) + parseInt(this.vel[1]);\n\n  this.pos = this.game.wrap(this.pos)\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  const r1 = this.radius;\n  const r2 = otherObject.radius;\n  const d = Util.distance(this.pos, otherObject.pos)\n  \n  if (r1 + r2 > d) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nmodule.exports = MovingObject\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// // Utility code, especially vector math stuff.\n\n// You'll use a lot of vectors in this assignment.\n\n// 2D vectors have an x and a y component.A position vector has an x and y position, \n// while a velocity vector has a speed in the x and the y directions.\n\n//   Distance\n// To find the \"distance\" between two points, the formula is:\n\n// // this is math, not JavaScript\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n// Norm\n// A vector has a norm, a.k.a.magnitude or length.The norm of a velocity vector is a speed.\n// If obj.vel = [3, 4](3 horizontal pixels and 4 vertical pixels per unit time) then the \n// overall speed is 5 pixels per unit time.You can easily calculate the norm of a vector \n// using your distance function:\n\n//   Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\nconst Util = {\n  inherits(childClass, parentClass){\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  distance(pos1, pos2) {\n    const p1 = pos1.slice();\n    const p2 = pos2.slice();\n    return Math.sqrt(\n      ((p2[0] - p1[0]) ** 2) + ((p2[1] - p1[1]) ** 2)\n    );\n  }\n}\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });