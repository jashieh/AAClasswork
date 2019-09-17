class MaxIntSet

  attr_accessor :store
  def initialize(max)
    @store = Array.new(max)
    @max = max 
  end

  def insert(num)
    raise "Out of bounds" if num < 0 || num > @max 
    @store[num] = true 
  end

  def remove(num)
    store[num] = false
  end

  def include?(num)
    store[num] == true
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[num % num_buckets] << num
  end

  def remove(num)
    @store[num % num_buckets].delete_at(@store[num % num_buckets].index(num))
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if count == @store.length
      resize!
    end 
    
    unless include?(num)
      @count += 1 
      @store[num % num_buckets] << num
    end
  end

  def remove(num)
    if include?(num)
      @store[num % num_buckets].delete_at(@store[num % num_buckets].index(num))
      @count -= 1 
    end
  end

  def include?(num)
    @store[num % num_buckets].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    arr = Array.new(2*@store.length) { Array.new }
    @store.each do |bucket|
      bucket.each do |el|
        arr[el % arr.length] << el 
      end
    end

    @store = arr 
  end
end
