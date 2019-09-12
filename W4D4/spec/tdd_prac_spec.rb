require "tdd_prac"

RSpec.describe "tdd_prac" do 
  describe "#my_uniq" do  

    it " It returns the unique elements in the order 
    in which they first appeared" do 
      expect(my_uniq([1, 2, 1, 3, 3])).to eq([1,2,3])
    end

    it "Expect method to raise an error if the argument
    is not an array" do
      expect{ my_uniq("notanarray")}.to raise_error(ArgumentError)
    end

  end

  describe "#two_sum" do
    it "Should return the indices where the pair sum to 0" do
      expect(two_sum([-1, 0, 2, -2, 1])).to eq([[0, 4], [2, 3]])
    end

    it "Expect the output pairs to be sorted" do
      expect(two_sum([5, 2, 1, -2, 0, -3, -5])).to eq([[0, 6], [1, 3]])
    end
  end

  describe "#my_transpose" do
    it "Expect an error to be raised if args is not a 2D array" do 
      expect{my_transpose("nota2Darray")}.to raise_error(ArgumentError)
    end

    it "Should transpose rows into columns" do
      arr = [[0,1],[2,3]]
      expect(my_transpose(arr)).to eq([[0,2],[1,3]])
    end
  end

  describe "#stock_picker" do 
    it "Should return the pair of days of greatest stock difference" do
      expect(stock_picker([2, 1, 5, 4, 6])).to eq([1,4])
    end

    it "Should not sell stocks before you buy them" do
      expect(stock_picker([3, 2, 5, 4, 6, 1])).to eq([1,4])
    end
  end
end

