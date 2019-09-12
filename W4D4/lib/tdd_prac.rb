def my_uniq(arr)
  raise ArgumentError unless arr.is_a?(Array)
  new_arr = []
  arr.each { |ele| new_arr << ele if !new_arr.include?(ele)}
  new_arr
end

def two_sum(arr)
  idx = {}
  pairs = []

  arr.each_with_index do |ele, i|
    compliment = -1 * ele
    pairs << [idx[compliment], i] if idx.has_key?(compliment)
    idx[ele] = i
  end
  pairs.sort
end


def my_transpose(arr)
  raise ArgumentError if !arr[0].is_a?(Array)

  new_arr = [] 
  (0...arr.length).each do |idx1|
    temp = []
    (0...arr.length).each do |idx2|
      temp << arr[idx2][idx1]
    end
    new_arr << temp 
  end
  new_arr
end

def stock_picker(arr)
  # prices = {}

  # arr.each_with_index { |ele, i| prices[ele] = i }
  # prices.keys.sort
  pair = []
  largest = 0 

  (0...arr.length).each do |i|
    (i...arr.length).each do |j|
      diff = arr[j] - arr[i]
      if diff > largest
        largest = diff
        pair = [i,j]
      end
    end
  end
  pair 
end
