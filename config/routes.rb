Rails.application.routes.draw do
  root 'users#show'
  devise_for :users
  resources :users, only: [:show, :index, :destroy]
  resources :meals do
    resources :items
  end

  resources :meal_plans

  namespace :api do
    namespace :v1 do
      resources :meal_plans, only: [:index, :show, :edit]
    end
  end


  namespace :api do
    namespace :v1 do
      resources :meals, only: [:index, :show, :create, :new, :destroy, :edit] do
        resources :items, only: [:index, :show, :create, :destroy] do
        end
      end
    end
  end
end
