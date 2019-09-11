require_relative 'piece'
require_relative 'rook'
require_relative 'king'
require_relative 'queen'
require_relative 'bishop'
require_relative 'knight'
require_relative 'pawn'
require_relative 'nullpiece'

class Board
  attr_reader :board, :sentinel

  def initialize
    @sentinel = NullPiece.instance
    @board = Array.new(8) {Array.new(8,@sentinel)}

    insert_pieces
  end 

  def insert_pieces
    black_pieces = [Rook,Knight,Bishop,Queen,King,Bishop,Knight,Rook] 
    black_pieces.each_with_index { |piece,i| board[0][i] = piece.new(:black,self,[0,i]) }
    (0...board.length).each { |i| board[1][i] = Pawn.new(:black,self,[1,i]) }

    white_pieces = [Rook,Knight,Bishop,Queen,King,Bishop,Knight,Rook] 
    white_pieces.each_with_index { |piece,i| board[7][i] = piece.new(:,self,[7,i]) }
    (0...board.length).each { |i| board[6][i] = Pawn.new(:black,self,[6,i]) }
  end

  def [](pos)
    row,col= pos
    board[row][col]
  end

  def []=(pos,val)
    row,col = pos
    board[row][col] = val
  end

  def move_piece(color, start_pos, end_pos)
    if !self[start_pos].is_a?(Piece) 
      raise 'no piece at this position'
      return false 
    elsif self[start_pos].color != color
      p "not your piece"
      return false 
    elsif !valid_pos?(end_pos)
      p "move outside of board range"
      return false 
    elsif self[start_pos].moves.include?(end_pos)
      self[start_pos].pos = end_pos
      self[end_pos] = self[start_pos]
      self[start_pos] = sentinel
      return true 
    else
      p "not a valid move"
      return false 
    end
  end

  def valid_pos?(pos)
    x,y = pos
    return true if x >= 0 && x < board.length && y >= 0 && y < board.length
    false
  end

  def add_piece(piece, pos)
    self[pos] = piece 
  end

  def checkmate?(color)
  end

  def in_check?(color)
  end

  def find_king(color)
    (0...@board.length).each do |i|
      (0...@board.length).each do |j|
        return board.pos if board[i][j].is_a?(King) && board[i][j].color == color 
      end
    end
  end

  def pieces
  end

  def dup
  end

end

