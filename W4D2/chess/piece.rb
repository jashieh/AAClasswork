class Piece
  def initialize(color, board, pos)
    @color = color 
    @board = board
    @pos = pos 
  end

  attr_writer :pos 

  def to_s
    #to be done
  end

  def empty?

  end

  def valid_moves
  end

  def symbol
  end

  def moves
  end
  
  private
  def move_into_check?(end_pos)
  end

end