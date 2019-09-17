class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    self.map.with_index {|ele, i| ele = ele * i}.sum
  end
end

class String
  def hash
    alphabet = ("a".."z").to_a + ("A".."Z").to_a
    sum = 0
    self.each_char.with_index {|char, i| sum += alphabet.index(char) * i}
    sum
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    alphabet = ("a".."z").to_a + ("A".."Z").to_a
    sum = 0 
    self.each do |k,v| 
      sum += k if k.is_a?(Integer)
      sum += v if v.is_a?(Integer)
      sum += alphabet.index(k.to_s) if k.is_a?(Symbol)
      sum += alphabet.index(v) if v.is_a?(String)
    end
    sum
  end
end
