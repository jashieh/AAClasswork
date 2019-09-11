class Bishop
  include Slideable 

  def symbol
  end

  protected
  def move_dirs
    diagonal_dirs
  end

end