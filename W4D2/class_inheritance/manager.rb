require_relative "employee"
class Manager < Employee
  def initialize(name,title,salary,boss)
    super
    @employees = [] 
  end

  def add_employees(arr)
    @employees = arr 
  end 

  def bonus(multiplier)
    @employees.map { |employee| employee.salary }.sum * multiplier
  end
end

ned = Employee.new("Ned","Founder",1000000,nil)
darren = Manager.new("darren","Ta Manager",78000,ned)
shawna = Employee.new("shawna","TA",12000,darren)
david = Employee.new("david","TA",10000,darren)

darren.add_employees([david,shawna])

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000