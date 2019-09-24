# == Schema Information
#
# Table name: polls
#
#  id      :bigint           not null, primary key
#  title   :string
#  user_id :integer
#

class Poll < ApplicationRecord
  belongs_to :author,
  foreign_key: :user_id,
  class_name: :User

  has_many :questions,
  foreign_key: :poll_id,
  class_name: :Question
  
end
