require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }

  describe 'GET user' do
    it 'should render show template' do
      get :show, params: { id: user.id }
      response.should redirect_to 'http://test.host/users/sign_in'
    end
  end
end
