// import { __esModule } from "../dist/main";

class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
  }

  setupTowers() {
    let $screen = $('<ul>');
    $screen.addClass('screen');
    $screen.appendTo(this.el);
    for (let i = 0; i < 3; i++) {
      let $ul = $('<ul>');
      $ul.addClass("tower");
      $ul.appendTo($screen);
      for (let j = 0; j < 3; j++) {
        let $disc = $("<li>").appendTo($ul);
      }
    }

    for(let i=0; i < this.game.towers[0].length; i++) {
      if (this.game.towers[0][i] === 3) {
        let test = $('ul ul li').get(i);
        $(test).addClass('three');
      }
      if (this.game.towers[0][i] === 2) {
        let test = $('ul ul li').get(i);
        $(test).addClass('two');
      }
      if (this.game.towers[0][i] === 1) {
        let test = $('ul ul li').get(i);
        $(test).addClass('one');
      }
      console.log($('ul ul li').get(i));
    }
  }

  render() {
    $('.screen').on('click', function(e) {
      let $li = $(e.target);

    })
  }
}

module.exports = View;