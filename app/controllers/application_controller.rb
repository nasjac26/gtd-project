# class ApplicationController < ActionController::API
#     include ActionController::Cookies
#     rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
#     rescue_from ActiveRecord::RecordNotFound, with: :not_found

#     private

#     def current_user  
#       User.find_by(id: session[:user_id])
#     end
    
#     def authorize
        
#       user = User.find_by(id: session[:user_id])

#       render json: { errors: ["Not authorized"] }, status: :unauthorized unless user
#     end
    
#     def render_unprocessable_entity_response(exception)
#       render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
#     end

#       def not_found(e) 
#         render json: { error: e.message }, status: :not_found
#       end
# end

class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  private

  def current_user  
    User.find_by(id: session[:user_id])
  end

  def not_found(e) 
    render json: { error: e.message }, status: :not_found
  end
end