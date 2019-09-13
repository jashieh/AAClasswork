require_relative "card"

class Hand
  HANDS = ["high_card","pair","two-pair","three-of-a-kind","straight","flush",
  "full-house","four-of-a-kind","straight-flush","royal-flush"]

  SUIT = ["H","D","S","C"]
  VALUES = %w( 2 3 4 5 6 7 8 9 10 J Q K A )

  attr_reader :cards 
  
  def initialize(cards)
    @cards = cards  
  end

  def best_hands
    
    @cards.each do |card|
      
    end

  end

  def flush?
    @cards.all? { |card| card.suit == @cards[0].suit }
  end

  def straight?
    (0...cards.length-1) do |i|
      return false if VALUES.index(card[i].value) + 1 != VALUES.index(cards[i+1].value)
    end
    true 
  end

  def four_of_a_kind?
    count = 0 
    (0...cards.length-1) do |i|
      count += 1 if VALUES.index(card[i].value) == VALUES.index(cards[i+1].value)
    end
    count == 3 
  end 

  def three_of_a_kind?
    count = 0 
    (0...cards.length-1) do |i|
      count += 1 if VALUES.index(card[i].value) == VALUES.index(cards[i+1].value)
    end
    count == 3 
  end

  def two_of_a_kind?
    
  end
  

  def sort
    sorted = false
    until sorted
      sorted = true
      (0...cards.length-1).each do |i|
        if VALUES.index(cards[i].value) > VALUES.index(cards[i+1].value)
          cards[i],cards[i+1] = cards[i+1],cards[i]
          sorted = false 
        end
      end
    end
    cards 
  end

end

a = Card.new("H","A")
b = Card.new("H","5")
c = Card.new("H","4")
d = Card.new("H","3")
e = Card.new("H","2")

cards = [a,b,c,d,e]

test = Hand.new(cards)
p test.sort
