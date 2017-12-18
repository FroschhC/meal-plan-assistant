class Item < ApplicationRecord
  validates :user_id, presence: true
  validates :name, presence: true

  belongs_to :user
  has_many :meal_items
  has_many :meals, through: :meal_items
end
