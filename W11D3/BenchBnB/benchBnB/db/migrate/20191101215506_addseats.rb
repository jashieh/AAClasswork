class Addseats < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :seating, :integer
  end
end
