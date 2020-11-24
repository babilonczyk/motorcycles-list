module Motorcycles

  class DeleteRequest

    def initialize( url )
      @url = url
    end

    def request
      request_body
    end

    private

    def request_body
      uri = URI(@url)
      http = Net::HTTP.new(uri.host, uri.port)
      req = Net::HTTP::Delete.new(uri.path)
      http.request(req) # 200 OK
    end

  end
end