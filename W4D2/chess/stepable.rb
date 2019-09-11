module Stepable
  
  def moves 
    all_moves = []
    x,y = pos 
    move_diffs.each do |move|
      dx,dy = move 
      new_pos = [x + dx, y + dy]
      
      all_moves << new_pos if board.valid_pos?(new_pos) && (board[new_pos].empty?|| 
      board[new_pos].color != color) 
    end
    all_moves
  end 

  private 
  def move_diffs
  end
end