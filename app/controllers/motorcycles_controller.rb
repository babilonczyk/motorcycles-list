

class MotorcyclesController < ApplicationController
  before_action :find_motorcycle, only: [ :show, :edit, :update, :destroy ]


  def index
    @motorcycles = Motorcycle.all

    unless @motorcycles.exists?

      ::Motorcycles::RequestManager.new("GET", "http://localhost:1234/motorcycles").request

    end
  end

  def show
  end

  def new
    @motorcycle = Motorcycle.new
  end

  def create

    last_id = ::Motorcycles::LastIdRequest.new("http://localhost:1234/motorcycles").request || 1

    @motorcycle = Motorcycle.new(motorcycle_params)

    @motorcycle.id = last_id + 1

    if @motorcycle.save

      request_params =  {
          id: @motorcycle.id,
          name: @motorcycle.name
      }

      ::Motorcycles::RequestManager.new("POST", "http://localhost:1234/motorcycles", request_params).request

      redirect_to motorcycles_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    @motorcycle.update(motorcycle_params)

    request_params =  {
        id: @motorcycle.id,
        name: @motorcycle.name
    }

    ::Motorcycles::RequestManager.new("PATCH", "http://localhost:1234/motorcycles/#{@motorcycle.id}", request_params).request

    redirect_to motorcycles_path
  end

  def destroy
    @motorcycle.destroy

    ::Motorcycles::RequestManager.new("DELETE", "http://localhost:1234/motorcycles/#{@motorcycle.id}").request

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
