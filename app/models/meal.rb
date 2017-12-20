# Meal Model
class Meal < ApplicationRecord
  validates :title, presence: true
  validates :category, presence: true
  validates :user_id, presence: true

  belongs_to :user
  has_many :meal_items
  has_many :items, through: :meal_items
end
