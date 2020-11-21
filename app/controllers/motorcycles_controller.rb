
class MotorcyclesController < ApplicationController
  before_action :find_motorcycle, only: [ :show, :edit, :update, :destroy ]

  def index
    @motorcycles = Motorcycle.all

    unless @motorcycles.exists?
      require 'net/http'
      require 'json'

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
      redirect_to motorcycles_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @motorcycle.update(motorcycle_params)
    redirect_to motorcycles_path
  end

  def destroy
    @motorcycle.destroy
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
