# Mealplan Model
class MealPlan < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user
  has_many :meal_plan_meals
  has_many :meals, through: :meal_plan_meals
end
