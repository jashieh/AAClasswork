require_relative "board"
require_relative "display"
require_relative "player"

class Game

  def initialize
    @board = Board.new
    @display = Display.new(@board)
    @players = [Player.new(:white,@display), Player.new(:black,@display)] 
    @current_player = @players[0]
  end

  def play

    while true
      @display.render 
      puts "#{@players[0].color} select a position of a piece (Press space to select)"
      key_input = @display.cursor.get_input
      
      if key_input != nil
        #if board.in_check?(@players[0].color)
        start_pos = key_input
        key_input2 = nil 
        puts "#{@players[0].color} select a position to move to (Press space to select)"
        while key_input2 == nil 
          key_input2 = @display.cursor.get_input
          @display.render 
        end
        end_pos = key_input2
        swap_turn! if @board.move_piece(@players[0].color, start_pos, end_pos)
      end

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