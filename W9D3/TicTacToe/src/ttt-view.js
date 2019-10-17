class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;

  }

  bindEvents() {
    let $ul = $('ul');
    let that = this;

    $ul.on('click', function(e) {
      let $li = $(e.target);
      if ($li.is('li')) {
        let idx = $li.index();
        let x = Math.floor(idx % 3);
        let y = Math.floor(idx / 3); 
        let pos = [y,x];
        that.game.playMove(pos);
        that.makeMove($li);
        
        if (that.game.isOver()) {
          console.log(that.game.winner());
          let winner = "";
          if (that.game.winner() === 'x') {
            winner = 'YoungJun';
          } else {
            winner = 'Braeden';
          }
          console.log(winner);
          let $gameover = $(`<label class="gameover"> 
          ${winner} has a huge pp </label>`);

          Array.from($ul.children()).forEach(el => {
            if ($(el).hasClass(`${that.game.winner()}`)) {
              $(el).addClass('fa-spin highlight');
            }
      
          }); 

          $gameover.appendTo(that.el);
          $ul.off();
        }
      }

      $(window).on('error', function(e) {
        alert("invalid move");
        // errors.clear();
      });
    });
  }

  makeMove($square) {
    if (this.game.currentPlayer === 'x') {
      $square.addClass('o');
    }
    else {
      $square.addClass('x');
    }
  }

  setupBoard() {
    let $div = $("<div></div>");
    let $board = $("<ul>");
    $board.addClass("board");
    $div.appendTo(this.el);
    $board.appendTo($div);

    for (let i = 0; i < 9; i++) {
      let $box = $("<li>").appendTo($('.board'));
    }
  }
}

module.exports = View;
