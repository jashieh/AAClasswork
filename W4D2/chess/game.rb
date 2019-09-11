require_relative "board"
require_relative "display"
require_relative "player"

class Game

  def initialize
    @board = Board.new
    @display = Display.new(@board)
    @players = [Player.new(:W,@display), Player.new(:B,@display)] 
    @current_player = @players[0]
  end

  def play

    while true
      @display.render 
      puts "#{@players[0].color} turn"
      puts "Enter a position of a piece [row,col]"
      start_pos = gets.chomp.split(",").map(&:to_i)
      puts "Enter a position to move to [row,col]"
      end_pos = gets.chomp.split(",").map(&:to_i)
      swap_turn! if @board.move_piece(@players[0].color, start_pos, end_pos)
    end
    

  end 

  def notify_player

  end

  def swap_turn!
    @players.rotate!
  end

end

g = Game.new
g.play