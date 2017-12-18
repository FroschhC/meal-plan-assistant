class CreateMealItems < ActiveRecord::Migration[5.1]
  def change
    create_table :meal_items do |t|
      t.integer :meal_id, null: false
      t.integer :item_id, null: false

      t.timestamps null:false
    end
  end
end
