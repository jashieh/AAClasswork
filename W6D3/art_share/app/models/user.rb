# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  has_many :artworks,
  foreign_key: :artist_id,
  class_name: :Artwork 

  has_many :shared_artworks,
  foreign_key: :viewer_id,
  class_name: :ArtworkShare

  has_many :comments,
  foreign_key: :user_id,
  class_name: :Comment,
  dependent: :destroy

  has_many :likes,
  foreign_key: :user_id,
  class_name: :Like,
  dependent: :destroy

  def artist_favorites
    self.artworks.where("artworks.favorite = true") 
  end

  def viewer_favorited
    self.shared_artworks.where("artwork_shares.favorite = true")
  end

end
