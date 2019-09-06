require_relative "tile"
class Board

    def initialize
        @board = Array.new(9) {Array.new(9)}
        @size = @board.length 
    end

    attr_reader :size
    def fill_board
        arr = ["*", "-", "-", "-"]
        (0...size).each do |i|
            (0...size).each do |j|
                @board[i][j] = Tile.new(arr.sample)
            end
        end
        assign_values
    end

    def assign_values
        (0...size).each do |i|
            (0...size).each do |j|
                count = 0
                count += 1 if i < size - 1 && @board[i+1][j] == "*"
                count += 1 if i >= 1 && @board[i-1][j] == "*"
                count += 1 if j < size - 1 && @board[i][j+1] == "*"
                count += 1 if j >= 1 && @board[i][j-1] == "*"
                count += 1 if i < size - 1 && j < size - 1 && @board[i+1][j+1] == "*"
                count += 1 if i >= 1 && j >= 1 && @board[i-1][j-1] == "*"
                count += 1 if i < size - 1 && j >= 1 && @board[i+1][j-1] == "*"
                count += 1 if i >= 1 && j <= size - 1 && @board[i-1][j+1] == "*"
                @board[i][j].number = count 
            end
        end
        
    end

    def reveal_all
        @board.map { |row| puts row.map(&:type).join(" ") }
    end

    def hidden_board
        puts "    #{(0..8).to_a.join(" ")}"
        puts "   ------------------"
        (0...size).each do |i|
            arr = []
            (0...size).each do |j|
                arr << @board[i][j].to_s
            end
            puts "#{i} | #{arr.join(" ")}"
        end
    end

    def get_move
        puts "Press f to flag or s to select"
        input = gets.chomp
        puts "Choose a position (e.g 0,1)"
        pos = gets.chomp.split(",").map(&:to_i)
        if input == "f"
            @board[pos[0]][pos[1]].flag
        elsif input == "s"
            reveal_neighbors(pos[0],pos[1],size-1,size-1)
        end
        pos 
    end

    def reveal_neighbors(i,j,row,col)
        @board[i][j].reveal
        if i >=1 && @board[i-1][j].number == 0 && !@board[i-1][j].revealed && @board[i-1][j].type = "-"
            reveal_neighbors(i-1,j,row,col)
        end
        if i <= col-1 && @board[i+1][j].number == 0 && !@board[i+1][j].revealed && @board[i+1][j].type = "-"
            reveal_neighbors(i+1,j,row,col)
        end
        if j >= 1 && @board[i][j-1].number == 0 && !@board[i][j-1].revealed && @board[i][j-1].type = "-"
            reveal_neighbors(i,j-1,row,col)
        end
        if j <= row-1 && @board[i][j+1].number == 0 && !@board[i][j+1].revealed && @board[i][j+1].type = "-"
            reveal_neighbors(i,j+1,row,col)
        end
    end

    def run 
        fill_board
        lose = false
        until lose 
            hidden_board
            pos = get_move
            p pos 
            lose = true if @board[pos[0],pos[1]] == "*"
            p lose
        end
        puts "you lose"
    end


end

game = Board.new
game.run