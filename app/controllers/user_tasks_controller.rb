class UserTasksController < ApplicationController
    def index
        render json: UserTask.all
    end
end
