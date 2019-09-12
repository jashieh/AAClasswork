class Hanoi
  attr_accessor :towers
  attr_reader :disks, :starting_pos

  def initialize(n)
    @towers = Array.new(3) { Array.new }
    @disks = n 
    place_disks
    p @towers
    @starting_pos = towers[0].dup
  end

  def place_disks
    i = @disks 
    while i > 0 
      towers[0] << i 
      i -= 1 
    end 
  end

  def valid_move?(start_pos,end_pos)
    return false if start_pos < 0 || start_pos > 3 
    return true if @towers[end_pos].nil?
    return true if @towers[start_pos][-1] < @towers[end_pos][-1]
    false 
  end

  def move(start_pos,end_pos)
    @towers
  end

  def win?
    return true if starting_pos == towers[1] || starting_pos == towers[2]
    false
  end

  def play
    
  end

end

test = Hanoi.new(4)