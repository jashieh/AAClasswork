require_relative "00_tree_node"

class KnightPathFinder
  def initialize(start)
    @root_node = PolyTreeNode.new(start)
    @considered_positions = [start]
  end

  def self.valid_moves(pos)
    row, col = pos
    
    val_pos = []
    size = 7
    val_pos << [row+2,col+1] if row+2 <= size && col+1 <= size
    val_pos << [row+2,col-1] if row+2 <= size && col-1 >= 0 
    val_pos << [row+1,col+2] if row+1 <= size && col+2 <= size
    val_pos << [row-1,col+2] if row-2 >= 0 && col+1 <= size
    val_pos << [row-2,col+1] if row-2 >= 0 && col+1 <= size 
    val_pos << [row-2,col-1] if row-2 >= 0 && col-1 >= 0
    val_pos << [row+1,col-2] if row+1 <= size && col-2 >= 0
    val_pos << [row-1,col-2] if row-1 >= 0 && col-2 >= 0

    val_pos
  end

  def new_move_positions(pos)
    moves = []
    KnightPathFinder.valid_moves(pos).each do |new_pos|
      unless @considered_positions.include?(new_pos)
        moves << new_pos 
        @considered_positions << new_pos
      end
    end
    moves
  end

  def build_move_tree
    queue = [@root_node]
    until queue.empty?
        first = queue.shift
        build_branch(first)
        first.children.each { |child| queue << child}
    end
    true
  end

  #         [0,0] -> @root_node
  #[2,1]            [1,2] -> [node1,node2]
  #
  #new_move_postions(2,1)      new_move_postions(1,2)          
  def build_branch(start_node)
    new_move_positions(start_node.value).each do |pos|
        start_node.add_child(PolyTreeNode.new(pos))
    end
  end

# while the map doesn't include our end position,
# we will dfs for the end_pos in each node.value
  def find_path(end_pos)
    # while !map.include?(end_pos)
      trace_back_path(end_pos) if self.build_move_tree.dfs(target)
    end
    nil
  end

# if path is found: we will push end_pos & unshift its parents/grandparents/etc until parent.nil
  def trace_back_path(end_pos)
    path = []
    until parent.nil?
      path += trace_back_path(end_pos.parent) + [end_pos]
    end
    path
  end

#     def build_move_tree
#     queue = [@root_node]
    
#     until queue.empty?
#         curr_node = queue.shift
#         moves = new_move_positions(curr_node.value) 
#         moves.each { |move| curr_node.add_child(PolyTreeNode.new(move)) } 
#         curr_node.children.each { |child| queue << child }
#     end
#     true
#   end  

#   def find_path(pos)
#     build_move_tree
#     found = @root_node.bfs(pos)
#       unless found.nil?
#           return path = trace_back_path(found)
#       end
#       return nil 
#   end

#   def trace_back_path(node)
#     path = [] 
#     curr_node = node 
#     until curr_node == nil
#         path << curr_node.value
#         curr_node = curr_node.parent
#     end
#     path.reverse
#   end

end

test = KnightPathFinder.new([0,0])
p test.find_path([7, 6])

