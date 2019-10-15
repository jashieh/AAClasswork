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

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nUtil.inherits(MovingObject, Asteroid);\n\nfunction Asteroid(args){\n  args['vel'] = Util.randomVec(10);\n  args['color'] = '#808080';\n  args['radius'] = 30;\n  MovingObject.call(this, args);\n}\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game(canvas) {\n  this.canvas = canvas;\n  this.ctx = canvas.getContext(\"2d\");\n  this.DIM_X = canvas.width;\n  this.DIM_Y = canvas.height;\n  this.NUM_ASTEROIDS = 0;\n  this.asteroids = [];\n  this.ship = new Ship({game: this});\n  this.addAsteroids();\n  this.objs = this.allObjects();\n}\n\nGame.prototype.addAsteroids = function() {\n  let curr_ast = null; \n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    curr_ast = new Asteroid({ pos: this.randomPosition(), game: this});\n    this.asteroids.push(curr_ast); \n  }\n};\n\nGame.prototype.randomPosition = function() {\n  let randX = Math.random() * this.DIM_X,\n      randY = Math.random() * this.DIM_Y;\n  return [randX, randY];\n};\n\nGame.prototype.draw = function() {\n  // this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  this.ctx.fillStyle = '#2b2b2b';\n  this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n  for (let i = 0; i < this.objs.length; i++) {\n    this.objs[i].draw(this.ctx);\n  }\n\n};\n\nGame.prototype.moveObjects = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n  this.objs[0].move();\n  // for (let i = 0; i < this.objs.length ; i++) {\n  //   this.objs[i].move();\n  // }\n  this.draw(this.ctx);\n};\n\nGame.prototype.wrap = function(pos) {\n  // console.log(x % this.DIM_X);\n  let x = pos[0],\n      y = pos[1];\n  if (x < 0 && y < 0) \n    return [this.DIM_X + x, this.DIM_Y + y];\n  else if (x < 0)\n    return [this.DIM_X + x, y % this.DIM_Y];\n  else if (y < 0)\n    return [x % this.DIM_X, this.DIM_Y + y];\n  else\n    return [x % this.DIM_X, y % this.DIM_Y];\n};\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.objs.length; i++) {\n    for (let j = 0; j < this.objs.length; j++) {\n      if (i === j) continue;\n      let obj1 = this.objs[i],\n          obj2 = this.objs[j];\n      if (obj1.isCollidedWith(obj2)) {\n        if (obj1 instanceof Ship || obj2 instanceof Ship) {\n          console.log(\"Game over\");\n          // console.log(this.objs[this.objs.length - 1]);\n          let ship = this.objs[0];\n          ship.relocate();\n          return;\n        }\n        else {\n          this.remove(obj1);\n          this.remove(obj2);\n          console.log(\"COLLISION!\");\n          return;\n        }\n      }\n    }\n  }\n};\n\nGame.prototype.remove = function(obj) {\n  \n  for (let i = 0; i < this.objs.length; i++) {\n    if (this.objs[i] === obj) {\n      return this.objs.splice(i,1);\n    }\n  }\n  // delete this.asteroids[i];\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.allObjects = function() {\n  return [this.ship].concat(this.asteroids);\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(canvas) {\n  this.game = new Game(canvas);\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  this.bindKeyHandlers();\n  setInterval(function() {\n    that.game.step();\n    that.game.draw();\n  }, 20);\n};\n\nGameView.prototype.bindKeyHandlers = function() {\n  let that = this;\n  console.log(that.game.objs[0] );//.power([0, 1]));\n  key('w',function(){ that.game.objs[0].power([0,-50]); } );\n  key('a', function () { that.game.objs[0].power([50, -50]); });\n\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\"); \nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.addEventListener('DOMContentLoaded', function() {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n\n  // ctx.fillStyle = '#2b2b2b';\n  // console.log(canvas.width);\n  // ctx.fillRect(0, 0, canvas.width, canvas.height);\n  // let m = new MovingObject({ pos: [300, 300], vel: [10, 10], radius: 10, color: '#808080' });\n  // m.draw(ctx);\n  // let a = new Asteroid({ pos: [300, 300] });\n  // a.draw(ctx);\n\n  // let game = new Game(canvas);\n  // game.draw();\n  let game = new GameView(canvas);\n  game.start();\n});\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nconsole.log(\"Webpack is working!\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(args) {\n  this.pos = args.pos;\n  this.vel = args.vel;\n  this.radius = args.radius;\n  this.color = args.color;\n  this.game = args.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  let newX = this.pos[0] + this.vel[0]; \n  let newY = this.pos[1] + this.vel[1]; \n  this.pos = this.game.wrap([newX, newY]);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  if (Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + \n    (this.pos[1] - otherObject.pos[1]) ** 2) < \n    (this.radius + otherObject.radius)) {\n      return true;\n  }\n  return false;\n\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nUtil.inherits(MovingObject, Ship);\n\nfunction Ship(args) {\n  args['vel'] = 0;\n  args['color'] = '#ffff';\n  args['radius'] = 50;\n  args['pos'] = args.game.randomPosition();\n  MovingObject.call(this, args);\n  // this.bindKeyHadlers();\n  // let that = this;\n  // window.addEventListener('w',function(){\n  //   return that.power([0, 50]);\n  // });\n}\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [1,1];\n  console.log(this.vel);\n};\n\nShip.prototype.power = function(impulse) {\n  console.log(this.vel);\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.bindKeyHadlers = function() {\n  let that = this;\n  console.log(\"test\");\n  key('space', function () { that.power([0,50]); } );\n}\n\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst Util = {\n  inherits : function(ParentClass, ChildClass) {\n    let Surrogate = function(){};\n    Surrogate.prototype = ParentClass.prototype;\n    ChildClass.prototype = new Surrogate();\n    ChildClass.prototype.constructor = ChildClass;\n    return ChildClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });