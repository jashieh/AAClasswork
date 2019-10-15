const Game = require("./game.js");

function GameView(canvas) {
  this.game = new Game(canvas);
}

GameView.prototype.start = function() {
  let that = this;
  this.bindKeyHandlers();
  setInterval(function() {
    that.game.step();
    that.game.draw();
  }, 20);
};

GameView.prototype.bindKeyHandlers = function() {
  let that = this;
  console.log(that.game.objs[0] );//.power([0, 1]));
  key('w',function(){ that.game.objs[0].power([0,-50]); } );
  key('a', function () { that.game.objs[0].power([50, -50]); });

};

module.exports = GameView;