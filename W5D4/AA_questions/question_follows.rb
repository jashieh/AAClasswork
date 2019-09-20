class QuestionFollows
  def initialize(options = {})
    @id = options[id]
    @user_id = options[user_id]
    @question_id = options[question_id]
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM question_follows WHERE id = #{id}')
    QuestionFollows.new(data)
  end
  
  def self.find_by_user_id(user_id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM question_follows WHERE user_id = #{user_id}')
    QuestionFollows.new(data)
  end

   def self.find_by_question_id(question_id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM question_follows WHERE question_id = #{question_id}')
    QuestionFollows.new(data)
  end

end