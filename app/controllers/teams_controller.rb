class TeamsController < ApplicationController
    # finished 11/17/2021
    def create
        render json: Team.create!(team_create_params)
    end
    
    private

    def team_create_params
        params.permit(:team_name)
    end
    
end
