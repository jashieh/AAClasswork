require_relative 'piece'
require_relative 'stepable'

class Knight < Piece 
  include Stepable
  
  def symbol
    "N"
  end 

  def move_diffs
    [[2,1],[2,-1],[-2,1],[-2,-1],
    [1,2],[-1,-2],[-1,2],[1,-2]]
  end

end