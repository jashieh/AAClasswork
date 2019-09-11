require_relative "board"
require_relative "cursor"
require "colorize"

class Display
  attr_reader :board, :cursor

  def initialize(board)
    @board = board 
    @cursor = Cursor.new([0,0],board)
  end

  def render
    puts "  0 1 2 3 4 5 6 7"
    (0...8).each do |i|
      row = [i]
      (0...8).each do |j|
        if [i,j] == @cursor.cursor_pos
          row << board.board[i][j].symbol.red 
        else
          row << board.board[i][j].symbol 
        end
      end
      puts row.join(" ")
    end
  end
end

