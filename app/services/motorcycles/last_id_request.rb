module Motorcycles

  class LastIdRequest

    def initialize( url )
      @url = url
    end

    def request
      request_body
    end

    private

    def request_body
      uri = URI("http://localhost:1234/motorcycles")
      response = Net::HTTP.get(uri)
      json = JSON.parse(response)

      json.sort_by { |hash| hash['id'].to_i }.last["id"]
    end

  end
end