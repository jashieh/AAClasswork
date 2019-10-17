const View = require('./ttt-view.js');
const Game = require('./game/game.js');

  $(() => {
    let game = new Game();
    let $ttt = $('.ttt');
    let view = new View(game, $ttt);
    view.setupBoard();

    $('li').on('mouseover',function(e) {
      let $li = $(e.target);
      $li.addClass('hover');
      if (game.isOver()) {
        $('li').off();
      }
    });

    $('li').on('mouseout', function (e) {
      let $li = $(e.target);
      $li.removeClass('hover');
      if (game.isOver()) {
        $('li').off();
      }
    });

    view.bindEvents();
  });
