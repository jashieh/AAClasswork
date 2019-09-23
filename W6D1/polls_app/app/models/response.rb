# == Schema Information
#
# Table name: responses
#
#  id               :bigint           not null, primary key
#  user_id          :integer
#  answer_choice_id :integer
#

class Response < ApplicationRecord
  belongs_to :answer_choice,
  foreign_key: :answer_choice_id,
  class_name: :AnswerChoice

  belongs_to :respondent,
  foreign_key: :user_id,
  class_name: :User

  has_one :question,
  through: :answer_choice,
  source: :question


  def sibling_responses
    self.question.responses
      .where.not(id: self.id)
  end

  def respondent_already_answered?
    sibling_responses.exists?(:user_id :self.user_id)
  end

  def not_duplicate_response
    if self.respondent_already_answered?
      errors[:user_id] << "user has already responded"
    end
  end
end
