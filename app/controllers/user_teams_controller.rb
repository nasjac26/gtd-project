class UserTeamsController < ApplicationController
    def show
        user_team = UserTeam.find(params[:id])
        render json: user_team, status: ok
    end

    def create
        user_team = UserTeam.find(user_team_params)
        render json: User.find(user_team.user_id), status: :created
    end
    
    private

    def user_team_params
        params.permit(:user_id, :team_id)
    end
    
end


# def create
#     new_restaurant_pizza = RestaurantPizza.create!(restaurant_pizza_params)
#     render json: Pizza.find(new_restaurant_pizza.pizza_id), status: :created
# end