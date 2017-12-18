class CreateMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meals do |t|
      t.string :title, null: false
      t.integer :user_id, null: false

      t.timestamps null:false
    end
  end
end
