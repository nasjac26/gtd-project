class UsersController < ApplicationController
    # showing our data for us to see it's active
    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end


    # # get '/me'
    # def show
    #     if current_user
    #         render json: current_user, status: :ok
    #     else
    #         render json: { error: 'No active session' }, status: :unauthorized
    #     end
    # end

    # # post '/signup'
    # def create
    #     user = User.create(user_signup_params)
    #     if user.valid?
    #         session[:user_id] = user.id
    #         render json: user, status: :ok
    #     else
    #         render json: { error: user.errors }, status: :unprocessable_entity
    #     end
    # end
    
    # # get '/me'
    #     # returns the currently logged in user or 401 unauthorized if none exists. Used to determine whether to load the AuthenticatedApp or UnauthenticatedApp
    # # post '/login'
    #     # returns the newly logged in user
    # # delete '/logout'
    #     #removes the user_id from the session cookie

    # private
    
    # def user_signup_params
    #     params.permit(:username, :password, :password_confirmation)
    # end
    
    # def user_login_params
    #     params.permit(:username, :password)
    # end
end
