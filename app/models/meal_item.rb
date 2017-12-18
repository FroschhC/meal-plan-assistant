# MealItem Model 
class MealItem < ApplicationRecord
  validates :meal_id, presence: true
  validates :item_id, presence: true

  belongs_to :item
  belongs_to :meal
end
