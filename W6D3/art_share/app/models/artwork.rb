# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: :User

  has_many :artwork_shares,
  foreign_key: :artwork_id,
  class_name: :ArtworkShare 

  has_many :comments,
  foreign_key: :artwork_id,
  class_name: :Comment,  
  dependent: :destroy

  has_many :likes,
  foreign_key: :likeable_id,
  as: :likeable, 
  dependent: :destroy

  has_many :shared_viewers,
  through: :artwork_shares,
  source: :viewer 

  belongs_to :collection,
  foreign_key: :collection_id,
  class_name: :Collection

end
