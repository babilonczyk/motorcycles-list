require 'rails_helper'

RSpec.describe MotorcyclesController, type: :controller do

  describe "GET index" do
    subject { get :index  }

    it 'should assign @motorcycles' do
        expect{ subject }.to change(Motorcycle, :count).from(0).to(1)
    end

    it 'should render the index template' do
      subject
      expect(response).to render_template(:index)
    end

  end

end