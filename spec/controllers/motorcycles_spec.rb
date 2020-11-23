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
    subject{ get :new }

    it 'should render the new template' do
      subject
      expect(response).to render_template(:new)
    end

    it 'should assign @motorcycle with new Motorcycle Object' do
      subject
      expect( assigns( :motorcycle ) ).to be_a_new( Motorcycle )
    end
  end

end