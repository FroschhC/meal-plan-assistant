require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }

    describe 'GET user' do
      it 'should render show template' do
        get :show, params: { id: user.id }
        expect(response).to render_template('show')
      end
    end
end
