require "singleton"
require_relative "piece"

class NullPiece < Piece
  include Singleton
  
  def initialize
  end

  def symbol
    "x"
  end

  def empty?
    true
  end

  def moves
    []
  end

  def color
    :N
  end


end