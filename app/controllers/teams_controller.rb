class TeamsController < ApplicationController
    # finished 11/17/2021
    def create
        render json: Team.create!(team_create_params)
    end
    
    def show
        user = Team.find(params[:id])
        render json: user, status: :ok
    end
    
    private

    def team_create_params
        params.permit(:team_name)
    end
    
end
