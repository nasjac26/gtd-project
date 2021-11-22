class UsersController < ApplicationController
    #no idea what this does
    skip_before_action :authorize, only: :show

     #kept this the same cause it has an error writter out
    # post '/signup'
    #this creates a stored user inside the session hash
    def create
        user = User.create!(user_signup_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors }, status: :unprocessable_entity
        end
    end

    #this accesses user if they exist if not they wont see anything
    # def show
    #     render json: User.find(session[user_id]), status: :ok
    # end


    # get '/me'
    def show
        if current_user
            render json: User.find(session[user_id]), status: :ok
            # render json: current_user, status: :ok
        else
            render json: { error: 'No active session' }, status: :unauthorized
        end
    end

   
    
    # # get '/me'
    #     # returns the currently logged in user or 401 unauthorized if none exists. Used to determine whether to load the AuthenticatedApp or UnauthenticatedApp
    # # post '/login'
    #     # returns the newly logged in user
    # # delete '/logout'
    #     #removes the user_id from the session cookie

    private
    
    def user_signup_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
    
    def user_login_params
        params.permit(:username, :password)
    end

    
end
