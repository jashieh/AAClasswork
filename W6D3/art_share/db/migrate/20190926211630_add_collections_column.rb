class AddCollectionsColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :collection_id, :integer
  end
end
