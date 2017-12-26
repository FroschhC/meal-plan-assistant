class AddMealIdToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :meal_id, :integer, null: false
  end
end
