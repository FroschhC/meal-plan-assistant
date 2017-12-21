# Meal Contoller
class MealsController < ApplicationController
  before_action :authenticate_user!

  def new
  end

  def show
  end
end
