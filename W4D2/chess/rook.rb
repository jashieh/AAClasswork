class Rook < Piece
  include Slideable 

  def symbol
    super.to_s + "R"
  end

  protected
  def move_dirs
    horizontal_dirs
  end

end