class Users
  def initialize(options = {})
    @id = options[id]
    @fname = options[fname]
    @lname = options[lname]
  end
  

  def self.all
    data = QuestionsDatabase.instance.execute('SELECT * FROM users')
    data.map { |datum| Users.new(datum) }
  end


  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM users WHERE id = #{id}')
    Users.new(data)
  end
  
  def self.find_by_name(fname, lname)
    data = QuestionsDatabase.instance.execute('SELECT * FROM users WHERE fname = #{fname} AND lname = #{lname}')
    Users.new(data)
  end
  
end