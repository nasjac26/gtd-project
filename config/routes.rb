Rails.application.routes.draw do
  resources :teams
  resources :user_teams
  resources :users
  resources :user_tasks
  resources :tasks

  # get "/me", to: "users#show"
  # post "/signup", to: "users#create"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"
end
