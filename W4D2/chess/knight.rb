require_relative 'piece'

class Knight
  
  def symbol
  end
  def move_diffs
    [[2,1],[2,-1],[-2,1],[-2,-1],
    [1,2],[-1,-2],[-1,2],[1,-2]]
  end

end