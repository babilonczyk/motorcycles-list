
module Motorcycles

  class RequestManager

    def initialize(method, url, request_params="")
      @method = method
      @url = url
      @request_params = request_params
    end

    def request( m = @method )
      case m
      when "POST"
        ::Motorcycles::PostRequest.new(@url, @request_params).request
      when "DELETE"
        ::Motorcycles::DeleteRequest.new(@url).request
      when "PATCH"
        ::Motorcycles::PatchRequest.new(@url, @request_params).request
      when "GET"
        ::Motorcycles::GetRequest.new(@url).request
      end
    end

  end
end