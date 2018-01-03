# Mealplanmeal Model
class MealPlanMeal < ApplicationRecord
  validates :meal_id, presence: true
  validates :meal_plan_id, presence: true

  validates_uniqueness_of :meal_id, :message => "is already added"

  belongs_to :meal_plan
  belongs_to :meal
end
