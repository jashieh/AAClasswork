const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

function Game(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
  this.DIM_X = canvas.width;
  this.DIM_Y = canvas.height;
  this.NUM_ASTEROIDS = 0;
  this.asteroids = [];
  this.ship = new Ship({game: this});
  this.addAsteroids();
  this.objs = this.allObjects();
}

Game.prototype.addAsteroids = function() {
  let curr_ast = null; 
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    curr_ast = new Asteroid({ pos: this.randomPosition(), game: this});
    this.asteroids.push(curr_ast); 
  }
};

Game.prototype.randomPosition = function() {
  let randX = Math.random() * this.DIM_X,
      randY = Math.random() * this.DIM_Y;
  return [randX, randY];
};

Game.prototype.draw = function() {
  // this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.ctx.fillStyle = '#2b2b2b';
  this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
  for (let i = 0; i < this.objs.length; i++) {
    this.objs[i].draw(this.ctx);
  }

};

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
  this.objs[0].move();
  // for (let i = 0; i < this.objs.length ; i++) {
  //   this.objs[i].move();
  // }
  this.draw(this.ctx);
};

Game.prototype.wrap = function(pos) {
  // console.log(x % this.DIM_X);
  let x = pos[0],
      y = pos[1];
  if (x < 0 && y < 0) 
    return [this.DIM_X + x, this.DIM_Y + y];
  else if (x < 0)
    return [this.DIM_X + x, y % this.DIM_Y];
  else if (y < 0)
    return [x % this.DIM_X, this.DIM_Y + y];
  else
    return [x % this.DIM_X, y % this.DIM_Y];
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.objs.length; i++) {
    for (let j = 0; j < this.objs.length; j++) {
      if (i === j) continue;
      let obj1 = this.objs[i],
          obj2 = this.objs[j];
      if (obj1.isCollidedWith(obj2)) {
        if (obj1 instanceof Ship || obj2 instanceof Ship) {
          console.log("Game over");
          // console.log(this.objs[this.objs.length - 1]);
          let ship = this.objs[0];
          ship.relocate();
          return;
        }
        else {
          this.remove(obj1);
          this.remove(obj2);
          console.log("COLLISION!");
          return;
        }
      }
    }
  }
};

Game.prototype.remove = function(obj) {
  
  for (let i = 0; i < this.objs.length; i++) {
    if (this.objs[i] === obj) {
      return this.objs.splice(i,1);
    }
  }
  // delete this.asteroids[i];
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.allObjects = function() {
  return [this.ship].concat(this.asteroids);
};

module.exports = Game;
