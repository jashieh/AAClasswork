class Replies
  def initialize(options = {})
    @id = options[id]
    @user_id = options[user_id]
    @question_id = options[question_id]
    @parent_id = options[parent_id]
    @body = options[body]
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM replies WHERE id = #{id}')
    Replies.new(data)
  end

  def self.find_by_user_id(user_id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM replies WHERE user_id = #{user_id}')
    Replies.new(data)
  end

  def self.find_by_question_id(question_id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM replies WHERE question_id = #{question_id}')
    Replies.new(data)
  end

  def self.find_by_parent_id(parent_id)
    data = QuestionsDatabase.instance.execute('SELECT * FROM replies WHERE parent_id = #{parent_id}')
    Replies.new(data)
  end

end