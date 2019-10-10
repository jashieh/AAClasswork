let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = [...Array(8)].map(e=> Array(8));
  
  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black"); 

  grid[3][3] = new Piece("white"); 
  grid[4][4] = new Piece("white"); 
  return grid; 
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
    if (this.isValidPos(pos)) {
      return this.grid[pos[0]][pos[1]];
    }
    throw new Error('Not valid pos!');
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length > 0;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.isOccupied(pos)) {
    return this.grid[pos[0]][pos[1]].color === color;
  }
  return false;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return this.grid[pos[0]][pos[1]] !== undefined;
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return (!(this.hasMove('black') && this.hasMove('white')));
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return (pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 &&
    pos[1] < 8);
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let x = pos[0] + dir[0];
  let y = pos[1] + dir[1];
  if (!board.isValidPos([x,y])) return null;
  if (board.grid[x][y] === undefined) return null;
  if (board.grid[x][y].oppColor() === color) {
    return _positionsToFlip(board, [x,y], color, dir, piecesToFlip) === null ? null : 
    piecesToFlip.push(board.grid[x][y]);
  }
  if (board.grid[x][y].color === color) return piecesToFlip;
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (this.validMove(pos,color)) {
    this.grid[pos[0]][pos[1]] = new Piece(color);
    let piecesToFlip = [];
    for (let k = 0; k < Board.DIRS.length; k++) {
      _positionsToFlip(this, pos, color, Board.DIRS[k], piecesToFlip);
    }
      for (let i=0; i< piecesToFlip.length; i++){
        piecesToFlip[i].flip();
      }
    return; 
  }
  throw new Error('Invalid Move')
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  console.log("  0 1 2 3 4 5 6 7")
  for (let i = 0; i < this.grid.length; i++) {
    let row = `${i} `;
    for (let j = 0; j < this.grid.length; j++) {
      if (this.grid[i][j] === undefined) {
        row += "- ";
      }
      else {
        row += this.grid[i][j].toString() + " ";
      }
    }
    // debugger 
    console.log(row);
  }
  console.log(" ");
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  let piecesToFlip = [];
  if (this.isValidPos(pos) && this.grid[pos[0]][pos[1]] === undefined) {
    for (let k = 0; k < Board.DIRS.length; k++) {
      _positionsToFlip(this, pos, color, Board.DIRS[k], piecesToFlip);
    }
  }
  
  return piecesToFlip.length > 0;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {

  let moves = [];
  for (let i=0; i < this.grid.length; i++) {
    for (let j=0; j < this.grid.length; j++) {
      if (this.validMove([i,j],color)) {
        moves.push([i,j]);
      }
    }
  }
  return moves;
  //     if (this.grid[i][j] !== undefined && this.grid[i][j].color === color) {
         
  //       for (let k = 0; k < Board.DIRS.length; k++) {
  //         let x = i + Board.DIRS[k][0];
  //         let y = j + Board.DIRS[k][1];
  //         let test = false; 
  //         while (this.isValidPos([x,y])) {
  //           // debugger
  //           if (this.grid[x][y] === undefined) {
  //             if (test === true) {
  //               moves.push([x, y]);
  //             }
  //             break;
  //           }
  //           if (this.grid[x][y].color === color) {
  //             break;
  //           }
  //           if (this.grid[x][y].oppColor() === color) {
  //             test = true;
  //           }
  //           x += Board.DIRS[k][0];
  //           y += Board.DIRS[k][1];
  //         }
  //       }
  //     }
  //   }
  // }

  // return moves;
};

module.exports = Board;

let b = new Board();
// b.placePiece([2,3],'black');
// b.validMoves('black');
b.print();

