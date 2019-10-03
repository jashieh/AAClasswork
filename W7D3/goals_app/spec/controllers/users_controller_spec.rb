require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #new" do
    it 'render new @users page' do
      get :new

      expect(response).to render_template('new')
      expect(response).to have_http_status(200)

    end

  #   context 'with invalid params' do
  #  it 'validates the presence of title and body' do
  #   post :create, params: { user: { title: ' } }
  #   expect(response).to render_template('new')
  
  end
end
