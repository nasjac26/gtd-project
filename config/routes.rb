Rails.application.routes.draw do
  resources :teams
  resources :user_teams
  resources :users
  resources :user_tasks
  resources :tasks
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
