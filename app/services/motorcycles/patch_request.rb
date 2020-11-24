module Motorcycles

  class PatchRequest

    def initialize(url, request_params )
      @url = url
      @request_params = request_params
    end

    def request
      request_body
    end

    private

    def request_body
      request_header = { 'Content-Type': 'application/json' }
      uri = URI(@url)

      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Patch.new(uri.path, request_header)
      request.body = @request_params.to_json
      http.request(request) # 200 OK
    end

  end
end