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
    
  end
  
  def valid_moves
    # new_array = []
    # move_dirs.each do |dir|
    #   i = 1 
    #   until pos[0] + i*dir[0] > 8 && pos[1] + i*dir[1] > 8 && pos[0] + i*dir[0] < 0 && pos[1] + i*dir[1] < 0 
    #     if board[]
    #       i += 1 
    #     end
    #   end
    all_moves = []
    move_dirs.each do |dir|
      all_moves << helper_move(dir,pos)
    end
    all_moves
   end
    
    def helper_move(dir,pos)
      return [] if  !pos.all?{|num| num.between?(0,6) } || board[pos].color == color
      new_pos = dir.zip(pos).map!(&:sum) #[ dir[0]+pos[0], dir[1]+pos[1]] 
      result = [new_pos] + helper_move(dir,new_pos)
    end
    
    
    def symbol
      color 
    end
    
    def moves
    end
    
    private
    def move_into_check?(end_pos)
    end
    
  end