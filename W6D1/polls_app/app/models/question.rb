# == Schema Information
#
# Table name: questions
#
#  id       :bigint           not null, primary key
#  question :text
#  poll_id  :integer
#

class Question < ApplicationRecord
  belongs_to :poll,
  foreign_key: :poll_id,
  class_name: :Poll

  has_many :answer_choices,
  foreign_key: :question_id,
  class_name: :AnswerChoice

  has_many :responses,
  through: :answer_choices,
  source: :responses
end
