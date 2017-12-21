require 'rails_helper'

RSpec.describe Api::V1::MealsController, type: :controller do

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
