require_relative 'tic_tac_toe'
require "byebug"
class TicTacToeNode
  
  attr_reader :board, :next_mover_mark, :prev_move_pos
  
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if @board.over?
      (@board.winner == evaluator || @board.winner == nil) ? false : true 
    else
      all_children = children
      if evaluator == next_mover_mark
        return all_children.all? { |child| child.losing_node?(evaluator) }
      else
        return all_children.any? { |child| child.losing_node?(evaluator) }
      end
    end
  end

  def winning_node?(evaluator)
    if @board.over?
     @board.winner == evaluator ? true : false 
    else
      all_children = children
      if evaluator == next_mover_mark
        return all_children.any? { |child| child.winning_node?(evaluator) }
      else
        return all_children.all? { |child| child.winning_node?(evaluator) }
      end
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    child = []
    (0...@board.rows.length).each do |i|
      (0...@board.rows.length).each do |j|
        if next_mover_mark == :x 
            mark = :o
        elsif next_mover_mark == :o
            mark = :x  
        end
        if @board.empty?([i,j])
          pos = [i, j]
          copy = TicTacToeNode.new(@board.dup, mark, pos)
          copy.board.rows[i][j] = next_mover_mark
          child << copy          
        end
      end
    end
    child
  end

end
