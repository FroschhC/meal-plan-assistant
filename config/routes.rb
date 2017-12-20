Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  resources :users, only: [:show, :index, :destroy]
  resources :meals 

  namespace :api do
    namespace :v1 do
      resources :meals, only: [:index, :show, :create, :new, :destroy] do
        resources :items, only: [:index, :show, :create, :destroy] do
        end
      end
    end
  end
end
