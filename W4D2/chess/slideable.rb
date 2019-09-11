module Slideable

  @horizontal_dirs = [[0,1],[0,-1],[1,0],[-1,0]]
  @diagonal_dirs = [[1,1],[-1,1],[1,-1],[-1,-1]]

  def horizontal_dirs
    @horizontal_dirs
  end

  def diagonal_dirs
    @diagonal_dirs
  end

  def moves
    
  end

  private
  def move_dirs
  end

  def grow_unblocked_moves_in_dir(dx,dy)
  end
end