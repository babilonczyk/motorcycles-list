require 'rails_helper'

RSpec.describe Motorcycle, type: :model do
  describe 'columns' do
    it { is_expected.to have_db_column(:name) }
  end
end