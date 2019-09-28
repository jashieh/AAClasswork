class Cat < ApplicationRecord
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validate :check_sex #validates method check_sex
  def check_sex
    unless self.sex == "M" || self.sex == "F"
      errors[:sex] << 'invalid sex'
    end
  end

  def age 
    Date.today.cwyear - self.birth_date.year
  end 

  has_many :rental_requests,
  foreign_key: :cat_id,
  class_name: :CatRentalRequest, 
  dependent: :destroy 
end
