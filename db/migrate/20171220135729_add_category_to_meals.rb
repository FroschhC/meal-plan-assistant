class AddCategoryToMeals < ActiveRecord::Migration[5.1]
  def change
      add_column :meals, :category, :string, null: false
  end
end
