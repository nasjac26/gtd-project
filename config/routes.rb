Rails.application.routes.draw do
  resources :teams, only: :create
  resources :user_teams, only: [:show, :create]
  resources :users, only: :index
  resources :user_tasks, only: :index
  resources :tasks, only: :index

  # get "/me", to: "users#show"
  # post "/signup", to: "users#create"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"
end
