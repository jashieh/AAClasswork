class Deck
  SUIT = ["heart","diamond","spade","club"]
  VALUES = %w( 2 3 4 5 6 7 8 9 10 J Q K A )

  attr_accessor :cards 
  
  def initialize
    @cards = []
    insert_card
    shuffle
  end

  def shuffle
    @cards.shuffle
  end

  def insert_card
    VALUES.each do |val|
      SUIT.each { |s| @cards << Card.new(s,val) }
    end
  end

end 