require 'rails_helper'

describe Motorcycles::RequestManager do
  subject { described_class }

  let(:methods) { %w(POST DELETE PATCH GET) }

  let( :request_params ) do
    {
        name: "test_name"
    }
  end

  let(:post_object) {  ::Motorcycles::PostRequest.new("http://localhost:1234/motorcycles", request_params) }
  let(:delete_object) {  ::Motorcycles::DeleteRequest.new("http://localhost:1234/motorcycles/2") }
  let(:patch_object) {  ::Motorcycles::PatchRequest.new("http://localhost:1234/motorcycles/1", request_params) }
  let(:get_object) {  ::Motorcycles::GetRequest.new("http://localhost:1234/motorcycles") }

  describe '#request POST' do
    subject { described_class.new.request methods[0] }

    it 'should call method request' do
      expect(post_object).to receive(:request)

      post_object.request
    end
  end

  describe '#request DELETE' do
    subject { described_class.new.request methods[1] }

    it 'Should call delete_request service object' do
      expect(delete_object).to receive(:request)

      delete_object.request
    end
  end

  describe '#request PATCH' do
    subject { described_class.new.request methods[2] }

    it 'Should call patch_request service object' do
      expect(patch_object).to receive(:request)

      patch_object.request
    end

  end

  describe '#request GET' do
    subject { described_class.new.request methods[3] }

    it 'Should call get_request service object' do
      expect(get_object).to receive(:request)

      get_object.request
    end
  end

end