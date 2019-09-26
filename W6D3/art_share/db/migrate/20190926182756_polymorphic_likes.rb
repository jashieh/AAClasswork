class PolymorphicLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :like_id
    add_reference :likes, :likeable, polymorphic: true

    add_index :likes, :user_id
  end
end
