class Node
  attr_reader :key
  attr_accessor :val, :next, :prev
  
  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end
  
  def to_s
    "#{@key}: #{@val}"
  end
  
  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable
  
  def initialize
    @head = Node.new
    @tail = Node.new
    
    @head.next = @tail
    @tail.prev = @head 
  end
  
  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end
  
  def first
    @head.next
  end
  
  def last
    @tail.prev 
  end
  
  def empty?
    @head.next == @tail 
  end
  
  def get(key)
    node = first 
    while node != @tail
      if node.key == key 
        return node.val 
      end
      node = node.next 
    end
    nil  
  end
  
  def include?(key)
    node = first 
    while node != @tail
      return true if node.key == key 
      node = node.next 
    end
    false 
  end
  
  def append(key, val)
    node = Node.new(key,val)
    node.prev = @tail.prev 
    node.prev.next = node 
    @tail.prev = node 
    node.next = @tail 
  end
  
  def update(key, val)
    node = first 
    while node != @tail
      if node.key == key 
        node.val = val 
        return true
      end
      node = node.next 
    end
    false 
  end
  
  def remove(key)
    node = first 
    while node != @tail
      if node.key == key 
        node.prev.next = node.next
        node.next.prev = node.prev  
        return node.val
      end
      node = node.next 
    end
    false 
  end
  
  def each
    node = first 
    while node != @tail
      yield(node)
      node = node.next 
    end
  end
  
  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
