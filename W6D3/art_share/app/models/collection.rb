class Collection < ApplicationRecord
  
  has_many :artworks,
  foreign_key: :collection_id,
  class_name: :Artwork
end
