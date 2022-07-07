class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def show
        aparment = Aparment.find(params[:id])
        rendor json: aparment
    end
end
