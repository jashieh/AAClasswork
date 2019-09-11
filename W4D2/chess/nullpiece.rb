require "singleton"
require_relative "piece"

class NullPiece < Piece
  include Singleton
  
  def initialize
  end

  def symbol
    "⌑"
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