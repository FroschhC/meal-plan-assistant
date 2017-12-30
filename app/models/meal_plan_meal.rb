# Mealplanmeal Model
class MealPlanMeal < ApplicationRecord
  validates :meal_id, presence: true
  validates :meal_plan_id, presence: true

  belongs_to :meal_plan
  belongs_to :meal
end
