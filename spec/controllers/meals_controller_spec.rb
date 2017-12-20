require 'rails_helper'

RSpec.describe MealsController, type: :controller do
  let!(:meal) { FactoryBot.create(:meal) }

  describe 'GET meal' do
    it 'should render show template' do
      get :show, params: { id: meal.id }
      response.should redirect_to 'http://test.host/users/sign_in'
    end
  end
end
