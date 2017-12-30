class CreateMealPlans < ActiveRecord::Migration[5.1]
  def change
    create_table :meal_plans do |t|
      t.integer :user_id, null: false

      t.timestamps null:false
    end
  end
end
