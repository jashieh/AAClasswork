class Questions 
  def initialize(options = {})
    @id = options[id]
    @user_id = options[user_id]
    @title = options[title]
    @body = options[body]
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM questions WHERE id = #{id}')
    Questions.new(data)
  end

end