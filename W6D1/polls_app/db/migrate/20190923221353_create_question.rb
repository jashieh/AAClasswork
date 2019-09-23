class CreateQuestion < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :question, NULL: false
      t.integer :poll_id, NULL: false
    end

    add_index :questions, :poll_id
  end
end
