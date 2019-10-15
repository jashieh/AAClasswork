function MovingObject(args) {
  this.pos = args.pos;
  this.vel = args.vel;
  this.radius = args.radius;
  this.color = args.color;
  this.game = args.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  let newX = this.pos[0] + this.vel[0]; 
  let newY = this.pos[1] + this.vel[1]; 
  this.pos = this.game.wrap([newX, newY]);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  if (Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + 
    (this.pos[1] - otherObject.pos[1]) ** 2) < 
    (this.radius + otherObject.radius)) {
      return true;
  }
  return false;

};

module.exports = MovingObject;