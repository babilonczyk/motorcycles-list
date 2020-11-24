require 'rails_helper'

RSpec.describe MotorcyclesController, type: :controller do

  describe "GET index" do
    subject { get :index  }

    it 'should change Motorcycles count from 0 to 1' do
        expect{ subject }.to change(Motorcycle, :count).from(0).to(1)
    end

    it 'should render the index template' do
      subject
      expect(response).to render_template(:index)
    end

  end


  describe "GET new" do
    before do
      get :new
    end

    it 'should render the new template' do
      expect(response).to render_template(:new)
    end

    it 'should assign @motorcycle with new Motorcycle object' do
      expect( assigns( :motorcycle ) ).to be_a_new( Motorcycle )
    end
  end

  describe "POST create" do
    subject { post :create, params: motorcycle_params  }

    let( :motorcycle_params ) do
      {
          motorcycle: {
              name: "test_motorcycle"
          }
      }
    end

    it "should create a new Motorcycle object" do
      expect { subject }.to change(Motorcycle, :count).from(0).to(1)
    end

  end

end