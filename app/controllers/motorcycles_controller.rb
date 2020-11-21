
class MotorcyclesController < ApplicationController
  before_action :find_motorcycle, only: [ :show, :edit, :update, :destroy ]

  require 'net/http'
  require 'json'

  def index
    @motorcycles = Motorcycle.all

    unless @motorcycles.exists?

      url = 'http://localhost:1234/motorcycles'
      uri = URI(url)
      response = Net::HTTP.get(uri)
      json = JSON.parse(response)

      json.each do |m|
        Motorcycle.create( name: m["name"])
      end

    end
  end

  def show
  end

  def new
    @motorcycle = Motorcycle.new
  end

  def create
    @motorcycle = Motorcycle.new(motorcycle_params)

    if @motorcycle.save
      request_header = { 'Content-Type': 'application/json' }
      uri = URI("http://localhost:1234/motorcycles")

      request_params =  {
          id: @motorcycle.id,
          name: @motorcycle.name
      }

      http = Net::HTTP.new(uri.host, uri.port)
      request = Net::HTTP::Post.new(uri.path, request_header)
      request.body = request_params.to_json
      http.request(request)

      redirect_to motorcycles_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @motorcycle.update(motorcycle_params)

    request_header = { 'Content-Type': 'application/json' }
    uri = URI("http://localhost:1234/motorcycles/#{@motorcycle.id}")

    request_params =  {
        id: @motorcycle.id,
        name: @motorcycle.name
    }

    http = Net::HTTP.new(uri.host, uri.port)
    request = Net::HTTP::Patch.new(uri.path, request_header)
    request.body = request_params.to_json
    http.request(request)


    redirect_to motorcycles_path
  end

  def destroy
    @motorcycle.destroy

    uri = URI("http://localhost:1234/motorcycles/#{@motorcycle.id}")
    http = Net::HTTP.new(uri.host, uri.port)
    req = Net::HTTP::Delete.new(uri.path)
    http.request(req)

    redirect_to motorcycles_path

  end

  private

  def find_motorcycle
    @motorcycle = Motorcycle.find(params[:id])
  end

  def motorcycle_params
    params.require(:motorcycle).permit(:name)
  end

end
