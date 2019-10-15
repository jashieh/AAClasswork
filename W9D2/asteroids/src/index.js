const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js"); 
const GameView = require("./game_view.js");

window.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  // ctx.fillStyle = '#2b2b2b';
  // console.log(canvas.width);
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  // let m = new MovingObject({ pos: [300, 300], vel: [10, 10], radius: 10, color: '#808080' });
  // m.draw(ctx);
  // let a = new Asteroid({ pos: [300, 300] });
  // a.draw(ctx);

  // let game = new Game(canvas);
  // game.draw();
  let game = new GameView(canvas);
  game.start();
});

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
console.log("Webpack is working!");
