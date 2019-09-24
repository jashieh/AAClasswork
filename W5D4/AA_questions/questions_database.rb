require 'sqlite3'
require 'singleton'

# require './questions_database.rb'
class QuestionsDatabase < SQLite3::Database
  include Singleton
  
  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true 
  end
  
end

class Users
  
  attr_reader :id,:fname,:lname
  def initialize(options = {})
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end
  
  
  def self.all
    data = QuestionsDatabase.instance.execute('SELECT id FROM users')
    data.map { |datum| Users.new(datum) }
  end
  
  # def self.find_by(id,type)
  #   data = QuestionsDatabase.instance.execute('SELECT * FROM users WHERE #{type} = [id]')
  #   data.map { |datum| Users.new(datum) }
  # end
  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
    SELECT * 
    FROM users 
    WHERE id = ?
    SQL
    #data.map { |datum| Users.new(datum) }
    data.empty? ? nil : Users.new(data[0])
  end
  
  def self.find_by_name(fname, lname)
    data = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
    SELECT * 
    FROM users 
    WHERE fname = ? AND lname = ?
    SQL
    # data.map { |datum| Users.new(datum) }
    data.empty? ? nil : Users.new(data[0])
  end
  
  def authored_questions
    Questions.find_by_user_id(id)
  end

  def authored_replies
    Replies.find_by_user_id(id)
  end

  def followed_questions
    QuestionFollows.followers_for_user_id(id)
  end
  
end

class Questions 
  def initialize(options = {})
    @id = options['id']
    @user_id = options['user_id']
    @title = options['title']
    @body = options['body']
  end
  
  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
    SELECT * 
    FROM questions 
    WHERE id = ? 
    SQL
    # data.map { |datum| Questions.new(datum) }
    data.empty? ? nil : Questions.new(data[0])
  end
  
  def self.find_by_user_id(u_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, u_id)
    SELECT * 
    FROM questions 
    WHERE user_id = ? 
    SQL
    #data.map { |datum| Questions.new(datum) }
    data.empty? ? nil : Questions.new(data[0])
  end

  def author
    Users.find_by_id(@user_id)
  end

  def replies
    Replies.find_by_question_id(@id)
  end

   def followers
    QuestionFollows.followers_for_question_id(@id)
  end
  
end

class QuestionFollows
  attr_reader :user_id, :question_id

  def initialize(options = {})
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end


  def self.all
    data = QuestionsDatabase.instance.execute('SELECT * FROM question_follows')
    data.map { |datum| QuestionFollows.new(datum) }
  end


  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
    SELECT * 
    FROM question_follows 
    WHERE id = ? 
    SQL
    #data.map { |datum| QuestionFollows.new(datum) }
    data.empty? ? nil : QuestionFollows.new(data[0])
  end
  
  def self.find_by_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
    SELECT * 
    FROM question_follows 
    WHERE user_id = ? 
    SQL
    data.empty? ? nil : QuestionFollows.new(data[0])
    #data.map { |datum| QuestionFollows.new(datum) }
  end
  
  def self.find_by_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
    SELECT * 
    FROM question_follows 
    WHERE question_id = ? 
    SQL
    #data.map { |datum| QuestionFollows.new(datum) }
    data.empty? ? nil : QuestionFollows.new(data[0])
  end

  def self.followers_for_question_id(question_id)
    QuestionFollows.all.select { |match| Users.find_by_id(match.user_id) if match.question_id == question_id }
  end

  def self.followers_for_user_id(user_id)
    QuestionFollows.all.select { |match| Questions.find_by_id(match.question_id) if match.user_id == user_id}
  end

  def self.most_followed_questions(n)
    data = QuestionsDatabase.instance.execute(<<-SQL)
    SELECT question_follows.question_id, COUNT(*)
    FROM question_follows 
    GROUP BY question_follows.question_id
    ORDER BY COUNT(*) DESC 
    LIMIT &1
    SQL
  end
  
end

class Replies

  attr_reader :id, :parent_id
  def initialize(options = {})
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
    @parent_id = options['parent_id']
    @body = options['body']
  end
  
  def self.all
    data = QuestionsDatabase.instance.execute('SELECT * FROM replies')
    data.map { |datum| Replies.new(datum) }
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
    SELECT * 
    FROM replies 
    WHERE id = ? 
    SQL
    #data.map { |datum| Replies.new(datum) }
    data.empty? ? nil : Replies.new(data[0])
  end
  
  def self.find_by_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
    SELECT * 
    FROM replies 
    WHERE user_id = ? 
    SQL
    # data.map { |datum| Replies.new(datum) }
    data.empty? ? nil : Replies.new(data[0])
  end
  
  def self.find_by_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
    SELECT * 
    FROM replies 
    WHERE question_id = ? 
    SQL
    data.empty? ? nil : data.map { |datum| Replies.new(datum) }
  end
  
  def self.find_by_parent_id(parent_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, parent_id)
    SELECT * 
    FROM replies 
    WHERE parent_id = ? 
    SQL
    # data.map { |datum| Replies.new(datum) }
    data.empty? ? nil : Replies.new(data[0])
  end

  def author
    Users.find_by_id(@user_id)
  end

  def question
    Question.find_by_question_id(@question_id)
  end

  def parent_reply
    Replies.find_by_parent_id(@parent_id)
  end

  def child_replies
    arr = [] 
    Replies.all.each do |reply|
      arr << reply if reply.parent_id == @id 
    end
    arr 
  end
  
end

class QuestionLikes
  def initialize(options = {})
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end
  
  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
    SELECT * 
    FROM question_likes 
    WHERE id = ? 
    SQL
    # data.map { |datum| QuestionLikes.new(datum) }
    data.empty? ? nil : QuestionLikes.new(data[0]) 
  end
  
  def self.find_by_user_id(user_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, user_id)
    SELECT * 
    FROM question_likes 
    WHERE user_id = ? 
    SQL
    # data.map { |datum| QuestionLikes.new(datum) }
    data.empty? ? nil : QuestionLikes.new(data[0]) 
  end
  
  def self.find_by_question_id(question_id)
    data = QuestionsDatabase.instance.execute(<<-SQL, question_id)
    SELECT * 
    FROM question_likes 
    WHERE question_id = ? 
    SQL
    # data.map { |datum| QuestionLikes.new(datum) }
    data.empty? ? nil : QuestionLikes.new(data[0]) 
  end
  
end