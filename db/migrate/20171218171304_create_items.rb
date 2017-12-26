class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.string :serving, null: false
      t.integer :calories, null: false
      t.integer :protein, null: false
      t.integer :carbohydrates, null: false
      t.integer :fat, null: false

      t.timestamps null: false
    end
  end
end
