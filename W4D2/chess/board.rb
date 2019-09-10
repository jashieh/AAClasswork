require_relative 'piece'

class Board
  attr_reader :board

  def initialize
    @board = Array.new(8) {Array.new(8)}
    (0...@board.length).each do |i|
      (0...@board.length).each do |j|
        @board[i][j] = Piece.new if i<=1 || i >=6
      end
    end
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

b = Board.new
b.move_piece([5,5],[0,5])