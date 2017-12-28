# Serializer
class MealSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :category, :items
  has_many :items
end
