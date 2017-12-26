# comment for codeclimate
class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def new
    @item = Item.new
  end

  def create
    @meal = Meal.find(params[:meal_id])
    @item = Item.new(item_params)
    @user = current_user
    @item.user = @user

    if @item.save
      @new = MealItem.create(meal_id: @item.meal_id, item_id: @item.id)
      @items = @meal.items.order(:created_at)
      render json: { items: @items }
    else
      render json: { error: @item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @meal = Meal.find(params[:meal_id])
    @item = Item.find(params[:id])
    @item.destroy
    @items = @meal.items.order(:created_at)
    render json: { items: @items }
  end

  private

  def item_params
    params.require(:item).permit(:name, :serving, :calories, :protein, :carbohydrates, :fat, :user_id, :meal_id)
  end
end
