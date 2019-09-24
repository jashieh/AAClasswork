class CreatePoll < ActiveRecord::Migration[5.2]
  def change
    create_table :polls do |t|
      t.string :title, NULL: false
      t.integer :user_id, NULL: false
    end

    add_index :polls, :user_id
  end
end
