class Post < ApplicationRecord
  validates :title, presence: true 

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User 

  # belongs_to :sub,
  # foreign_key: :sub_id,
  # class_name: :Sub 

  has_many :post_subs, dependent: :destroy,
    foreign_key: :post_id,
    class_name: :PostSub

  has_many :subs,
    through: :post_subs,
    source: :sub 

  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment
end
