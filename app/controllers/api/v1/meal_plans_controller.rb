# comment for codeclimate
class Api::V1::MealPlansController < ApplicationController

  def index
    @user = current_user

    if @user.meal_plan
    render json:  @user.meal_plan.meals
    else
    @mealplan = MealPlan.create(user_id: current_user.id)
    render json:  @mealplan.meals
    end
  end
end
