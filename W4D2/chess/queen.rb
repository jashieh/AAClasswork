class Queen
  include Slideable 

  def symbol
    super.to_s + "Q"
  end

  protected
  def move_dirs
    diagonal_dirs + horizontal_dirs
  end

end