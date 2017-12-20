require 'rails_helper'

RSpec.describe Api::V1::MealsController, type: :controller do

  # describe 'GET show' do
  #   let!(:m1) { FactoryBot.create(:meal) }
  #
  #   it 'should render json obj of one meal' do
  #     get :show, params: { meal_id: m1.id}
  #     json = JSON.parse(response.body)
  #
  #     expect(json['meal'].length).to eq(1)
  #   end
  # end

  describe 'POST create' do
    it 'should ' do
      user = FactoryBot.create(:user)
      params = {
        meal: {
          title: 'title',
          category: 'category',
          user_id: user.id
        },
        user: User.where({ id: user.id })
      }
      pre = Meal.count

      post :create, params: params
      # expect(Program.count).to eq(pre + 1)
      # expect(response).to have_http_status :ok
    end
  end
end
