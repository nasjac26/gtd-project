Rails.application.routes.draw do
  resources :teams, only: [:show, :create, :index]
  resources :user_teams, only: [:show, :create]
  resources :users, only: [:index, :show, :create]
  resources :user_tasks, only: [:index, :show]
  resources :tasks, only: :index

  get "/me", to: "users#show"
  # get "/myteam", to: "teams#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
