const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

Util.inherits(MovingObject, Ship);

function Ship(args) {
  args['vel'] = 0;
  args['color'] = '#ffff';
  args['radius'] = 50;
  args['pos'] = args.game.randomPosition();
  MovingObject.call(this, args);
  // this.bindKeyHadlers();
  // let that = this;
  // window.addEventListener('w',function(){
  //   return that.power([0, 50]);
  // });
}

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [1,1];
  console.log(this.vel);
};

Ship.prototype.power = function(impulse) {
  console.log(this.vel);
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.bindKeyHadlers = function() {
  let that = this;
  console.log("test");
  key('space', function () { that.power([0,50]); } );
}


module.exports = Ship;
