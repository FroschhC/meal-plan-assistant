# comment for codeclimate
class Api::V1::MealPlansController < ApplicationController

  def index
    render json:  MealPlan.first.meals
  end

end
