require_relative 'piece'
require_relative 'nullpiece'

class Board
  attr_reader :board

  def initialize
    # test = NullPiece(nil,nil,nil).instance
    @board = Array.new(8) {Array.new(8)}


    # (0...@board.length).each do |i|
    #   (0...@board.length).each do |j|
    #     @board[i][j] = Piece.new(nil,nil,nil) if i<=1 || i >=6
    #   end
    # end
    @board[0][5] = Piece.new("b",@board,[0,5])
  end

  def [](pos)
    row,col= pos
    board[row][col]
  end

  def []=(pos,val)
    row,col = pos
    board[row][col] = val
  end

  def move_piece(start_pos, end_pos)
    puts 'hey here'
    unless self[start_pos].is_a?(Piece)
      puts 'inside'
      raise 'not piece at this position'
    end
  end
end
