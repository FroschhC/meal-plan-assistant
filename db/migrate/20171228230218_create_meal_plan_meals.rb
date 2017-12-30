class CreateMealPlanMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meal_plan_meals do |t|
      t.integer :meal_id, null: false
      t.integer :meal_plan_id, null: false

      t.timestamps null: false 
    end
  end
end
