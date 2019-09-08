class PolyTreeNode

    attr_accessor :parent, :children, :value
    
    def initialize(value)
        @parent = nil
        @children = []
        @value = value
    end

    def parent=(other_node) # set current other_node's par to another other_node (parent other_node)
        unless (other_node.nil? || other_node.children.include?(self))
            other_node.children << self 
            parent.remove_child(self) unless parent.nil?
        end
        @parent = other_node
    end

    def add_child(node)
        unless children.include?(node)
            children << node 
            node.parent = self
        end
    end

    def remove_child(node)
        self.children.each_with_index do |child, i|
            if node == child
                child.parent = nil
                self.children.delete_at(i)
                return 
            end
        end
        raise "Error: node is not a child" 
    end

    ## Searchable   
    def dfs(target)
        return nil if self.nil?
        return self if self.value == target

        self.children.each do |child|
            res = child.dfs(target)
            return res unless res.nil?
        end
        nil
    end

    def bfs(target)
        queue = [self]

        until queue.empty?
            el = queue.shift
            return el if el.value == target
            el.children.each { |child| queue << child}
        end
        nil
    end
end