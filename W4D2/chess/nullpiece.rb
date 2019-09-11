require "singleton"

class NullPiece < Piece
  include Singleton
  def initialize(a,b,c)
    super
  end
end