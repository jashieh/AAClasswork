class Like < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :likeable,
  foreign_key: :likeable_id,
  polymorphic: true 

end
