# comment for codeclimate
class Api::V1::MealPlanMealsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @meal_id = params[:_json]
    @meal = Meal.find(@meal_id)
    @mealplan = current_user.meal_plan
    @newMeal = MealPlanMeal.new(meal_id: @meal_id, meal_plan_id: @mealplan.id)

    if @newMeal.save
      render json: { meals: current_user.meals}
    else
      render json: { error: @newMeal.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @meal = MealPlanMeal.find_by(meal_id: params[:id])
    @meal.destroy
    render json: { meals: current_user.meal_plan }
  end

end
