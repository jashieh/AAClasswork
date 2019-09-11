#require_relative 'board'

class Piece
  attr_accessor :pos 
  attr_reader :board, :color
  
  def initialize(color, board, pos)
    @color = color 
    @board = board
    @pos = pos 
  end
  
  
  def to_s
    #to be done
  end
  
  def empty?
    false
  end
  
  def valid_moves
  end
  
  # def helper_move(dir,pos)
  #   return [] if  !pos.all?{|num| num.between?(0,6) } || board[pos].color == color
  #   new_pos = dir.zip(pos).map!(&:sum) #[ dir[0]+pos[0], dir[1]+pos[1]] 
  #   result = [new_pos] + helper_move(dir,new_pos)
  # end
  
  
  def symbol
  end
  
  private
  def move_into_check?(end_pos)
  end
  
end