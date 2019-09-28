class CatRentalRequest < ApplicationRecord
  validation :status, presence: true 

  belongs_to :cat,
  foreign_key: :cat_id,
  class_name: :Cat
end
