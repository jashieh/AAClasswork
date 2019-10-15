const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

Util.inherits(MovingObject, Asteroid);

function Asteroid(args){
  args['vel'] = Util.randomVec(10);
  args['color'] = '#808080';
  args['radius'] = 30;
  MovingObject.call(this, args);
}



module.exports = Asteroid;