class UserTasksController < ApplicationController
    def index
        render json: UserTask.all
    end

    def show
        user_team = UserTask.find(params[:id])
        render json: user_team, status: :ok
    end
end
