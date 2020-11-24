module Motorcycles

  class GetRequest

    def initialize( url )
      @url = url
    end

    def request
      request_body
    end

    private

    def request_body
      uri = URI(@url)
      response = Net::HTTP.get(uri)
      json = JSON.parse(response)

      json.each do |m|
        Motorcycle.create( name: m["name"])
      end
    end

  end
end