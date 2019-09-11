require_relative 'piece'

class Pawn < Piece
  
  def symbol
    "♟".colorize(color)
  end 
  
  def moves
    side_attacks + foward_steps
  end
  
  private
  def at_start_row?
    return true if color == :black && pos[0] == 1
    return true if color == :white && pos[0] == 6
    false
  end
  
  def forward_dir 
    return 1 if color == :black
    return -1 if color == :white
  end
  
  def foward_steps
    x,y = pos
    moves = []
    pos1 = [x+forward_dir, y]
    pos2 = [x+forward_dir*2, y]
    if board.valid_pos?(pos1) && board[pos1].empty? 
      moves << pos1
    end
    if board.valid_pos?(pos2) && board[pos2].empty? && at_start_row?
      moves << pos2
    end
    moves
  end
  
  def side_attacks
    x,y = pos
    pos1 = [x+forward_dir, y+1]
    pos2 = [x+forward_dir, y-1]
    attacks = []
    if board.valid_pos?(pos1) && board[pos1].color != color && !board[pos1].empty?
      attacks << pos1
    end
    if board.valid_pos?(pos2) && board[pos2].color != color  && !board[pos2].empty?
      attacks<< pos2
    end
    attacks
  end
  
end