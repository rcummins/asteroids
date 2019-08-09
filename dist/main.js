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

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Asteroid(game, pos) {\n  MovingObject.call(\n    this,\n    {game: game,\n      pos: pos,\n      vel: Util.randomVec(2),\n      radius: Asteroid.RADIUS,\n      color: Asteroid.COLOR});\n}\n\nAsteroid.RADIUS = 15;\nAsteroid.COLOR = \"gray\";\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  } else if (otherObject instanceof Bullet) {\n    this.game.remove(this);\n    this.game.remove(otherObject);\n  }\n};\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Bullet(game, pos) {\n  MovingObject.call(\n    this, \n    {game: game,\n      pos: pos,\n      vel: [game.ship.vel[0] * 4, game.ship.vel[1] * 4],\n      radius: Bullet.RADIUS,\n      color: Bullet.COLOR}\n  );\n}\n\nBullet.RADIUS = 5;\nBullet.COLOR = 'Red';\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = function() {\n  return false;\n};\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game() {\n  this.asteroids = [];\n  this.bullets = [];\n  this.ship = new Ship(this, this.randomPosition());\n\n  this.addAsteroids();\n}\n\nGame.BACKGROUND_COLOR = 'Black';\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.add = function(object) {\n  if (object instanceof Asteroid) {\n    this.asteroids.push(object);\n  } else if (object instanceof Bullet) {\n    this.bullets.push(object);\n  }\n};\n\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    let newAsteroid = new Asteroid(this, this.randomPosition());\n    this.add(newAsteroid);\n  }\n};\n\nGame.prototype.allObjects = function () {\n  return this.asteroids.concat(this.bullets).concat([this.ship]);\n};\n\nGame.prototype.checkCollisions = function() {\n  let allObjects = this.allObjects();\n  for (let index1 = 0; index1 < allObjects.length; index1++) {\n    for (let index2 = index1 + 1; index2 < allObjects.length; index2++) {\n      if (allObjects[index1].isCollidedWith(allObjects[index2])) {\n        allObjects[index1].collideWith(allObjects[index2]);\n      }\n    }\n  }\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = Game.BACKGROUND_COLOR;\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n  this.allObjects().forEach( function(object) {\n    object.draw(ctx);\n  });\n};\n\nGame.prototype.isOutOfBounds = function(pos) {\n  return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;\n};\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach( function(object) {\n    object.move();\n  });\n};\n\nGame.prototype.randomPosition = function () {\n  return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];\n};\n\nGame.prototype.remove = function(object) {\n  if (object instanceof Asteroid) {\n    this.asteroids.splice(this.asteroids.indexOf(object), 1);\n  } else if (object instanceof Bullet) {\n    this.bullets.splice(this.bullets.indexOf(object), 1);\n  }\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.wrap = function (pos) {\n  let newPos = [];\n\n  if (pos[0] < 0) {\n    newPos[0] = pos[0] + Game.DIM_X;\n  } else if (pos[0] > Game.DIM_X) {\n    newPos[0] = pos[0] - Game.DIM_X;\n  } else {\n    newPos[0] = pos[0];\n  }\n\n  if (pos[1] < 0) {\n    newPos[1] = pos[1] + Game.DIM_Y;\n  } else if (pos[1] > Game.DIM_Y) {\n    newPos[1] = pos[1] - Game.DIM_Y;\n  } else {\n    newPos[1] = pos[1];\n  }\n\n  return newPos;\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let gameView = this;\n\n  this.bindKeyHandlers();\n\n  setInterval( function() {\n    gameView.game.step();\n    gameView.game.draw(gameView.ctx);\n  }, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  let gameView = this;\n  window.key('left', function() { gameView.game.ship.power([-1, 0]); });\n  window.key('right', function() { gameView.game.ship.power([1, 0]); });\n  window.key('up', function() { gameView.game.ship.power([0, -1]); });\n  window.key('down', function() { gameView.game.ship.power([0, 1]); });\n  window.key('space', function() { gameView.game.ship.fireBullet(); });\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  window.ctx = document.getElementById(\"game-canvas\").getContext('2d');\n  const gameView = new GameView(ctx);\n  gameView.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.game = options.game;\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let distance = Util.distance(this.pos, otherObject.pos);\n  let sumOfRadii = this.radius + otherObject.radius;\n  return distance < sumOfRadii;\n};\n\nMovingObject.prototype.isWrappable = function() {\n  return true;\n};\n\nMovingObject.prototype.move = function() {\n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n  if (this.game.isOutOfBounds(this.pos)) {\n    if (this.isWrappable()) {\n      this.pos = this.game.wrap(this.pos);\n    } else {\n      this.game.remove(this);\n    }\n  }\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nfunction Ship(game, pos) {\n  MovingObject.call(\n    this, \n    {game: game,\n      pos: pos,\n      vel: [0, 0],\n      radius: Ship.RADIUS,\n      color: Ship.COLOR}\n  );\n}\n\nShip.RADIUS = 15;\nShip.COLOR = 'Orange';\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.fireBullet = function() {\n  let newBullet = new Bullet(this.game, this.pos);\n  this.game.add(newBullet);\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];\n};\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const angle = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(angle), Math.cos(angle)], length);\n  },\n\n  scale(vector, m) {\n    return [vector[0] * m, vector[1] * m];\n  },\n\n  distance(pos1, pos2) {\n    let xDist = pos1[0] - pos2[0];\n    let yDist = pos1[1] - pos2[1];\n    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });