class Sub < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :moderator,
    foreign_key: :moderator_id,
    class_name: :User 

  # has_many :posts,
  #   foreign_key: :sub_id,
  #   class_name: :Post 

  has_many :post_subs, dependent: :destroy,
    foreign_key: :sub_id,
    class_name: :PostSub

  has_many :posts,
    through: :post_subs,
    source: :post
end
