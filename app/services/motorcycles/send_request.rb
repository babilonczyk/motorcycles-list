
module Motorcycles

  class SendRequest
    def initialize(method, url, request_params="")
      @method = method
      @url = url
      @request_params = request_params
    end

    def request
      case @method
      when 'POST'
        post_request( @url, @request_params )
      when 'DELETE'
        delete_request( @url )
      when 'PATCH'
        patch_request( @url, @request_params )
      when 'GET'
        get_request( @url )
      end
    end

    private

    attr_reader :method, :url, :request_params

    def post_request( url, request_params )
      request_header = { 'Content-Type': 'application/json' }
      uri = URI(url)

      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Post.new(uri.path, request_header)
      request.body = request_params.to_json
      http.request(request)
    end

    def delete_request( url )
      uri = URI(url)
      http = Net::HTTP.new(uri.host, uri.port)
      req = Net::HTTP::Delete.new(uri.path)
      http.request(req)
    end

    def patch_request( url, request_params )
      request_header = { 'Content-Type': 'application/json' }
      uri = URI(url)

      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Patch.new(uri.path, request_header)
      request.body = request_params.to_json
      http.request(request)
    end

    def get_request( url )
      uri = URI(url)
      response = Net::HTTP.get(uri)
      json = JSON.parse(response)

      json.each do |m|
        Motorcycle.create( name: m["name"])
      end
    end
  end
end