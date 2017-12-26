# comment for codeclimate
class Api::V1::MealsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    render json: {
      meals: current_user.meals.order(:created_at).reverse,
      items: Item.all
    }
  end

  def show
    @meal = Meal.find(params[:id])
    @items = @meal.items.order(:created_at)
    render json: {
      meal: @meal,
      items: @items
     }
  end

  def new
    render json: { meals: current_user.meals }
  end

  def destroy
    @meal = Meal.find(params[:id])
    @meal.destroy
    render json: { meal: @meal }
  end

  def create
    @meal = Meal.new(meal_params)
    if current_user
      @user = current_user
      @meal.user = @user
    end
    if @meal.save
      render json: { meal: @meal }
    else
      render json: { error: @meal.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def edit
    @meal = Meal.find(params[:id])
  end

  private

  def meal_params
    params.require(:meal).permit(:title, :category, :user_id)
  end
end
