# User Model
class User < ApplicationRecord
  mount_uploader :avatar, AvatarUploader

  devise :database_authenticatable, :registerable,
      :recoverable, :rememberable, :trackable, :validatable
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :user_name, presence: true

  has_many :meals
  has_many :items
end
