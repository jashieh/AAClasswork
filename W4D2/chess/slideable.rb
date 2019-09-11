module Slideable

  HORIZONTAL_DIRS = [[0,1],[0,-1],[1,0],[-1,0]]
  DIAGONAL_DIRS= [[1,1],[-1,1],[1,-1],[-1,-1]]

  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  def diagonal_dirs
    DIAGONAL_DIRS
  end

  def moves
    all_moves = [] 
    move_dirs.each do |dir|
      dx,dy = dir 
      all_moves += grow_unblocked_moves_in_dir(dx,dy)
    end
    p all_moves.size
    all_moves 
  end

  private
  def move_dirs
  end

  def grow_unblocked_moves_in_dir(dx,dy)
    curr_x, curr_y = pos
    direction_moves = []

    while true 
      curr_x += dx 
      curr_y += dy 
      new_pos = [curr_x,curr_y]

      break unless board.valid_pos?(new_pos)

      direction_moves << new_pos if board[new_pos].empty?

      break if board[new_pos].color == color 

      if board[new_pos].color != color && !board[new_pos].empty?
        direction_moves << new_pos
        break
      end
    end
    direction_moves
  end
end